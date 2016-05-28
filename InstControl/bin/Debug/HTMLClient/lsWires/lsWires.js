/// <reference path="lodash.js"/>

/*
============================================================================================
============================================================================================

lsWires.js

A libray of functions to help with Microsoft Visual Studio LightSwitch projects.

Dependencies:  
    
    jQuery, lo-dash.js, ResizeEnd.js

Documentation: 
    
    http://github.com/dwm9100b
    http://lightswitch.codewriting.tips
    http://blog.ofAnITGuy.com

License:

    Copyright (c) 2013, 2014 Dale Morrison, Interbay Technology Group.  All rights reserved.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

============================================================================================
============================================================================================
*/


// Does our namespace exist
window.lsWire = window.lsWire || {};

(function () {


    window.lsWire = {
        eventObjects: [],
        keyboardShortcuts: {},


        // #region Core - 17 functions
        // ==========================================================

        initializeCore: function (screen, directLinkingAllowed, screenPropertyName, callBack) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            ///     <summary>Initializes the lsWire system.  All possible direct entry points should call this in the screen created method.</summary>
            ///     <param name="screen" type="object" optional="false">Screen object</param>
            /// </signature>
            /// <signature>
            ///     <param name="screen" type="object" optional="false">Screen object</param>
            ///     <param name="directLinkingAllowed" type="boolean" optional="true">Defaults to true, is direct linking to this screen allowed</param>
            /// </signature>
            /// <signature>
            ///     <param name="screen" type="object" optional="false">Screen object</param>
            ///     <param name="directLinkingAllowed" type="boolean" optional="true">Defaults to true, is direct linking to this screen allowed</param>
            ///     <param name="screenPropertyName" type="string" optional="true">Name of a screen property that will be set to true when initialization is complete</param>
            /// </signature>
            /// <signature>
            ///     <param name="screen" type="object" optional="false">Screen object</param>
            ///     <param name="directLinkingAllowed" type="boolean" optional="true">Defaults to true, is direct linking to this screen allowed</param>
            ///     <param name="screenPropertyName" type="string" optional="true">Name of a screen property that will be set to true when initialization is complete</param>
            ///     <param name="callBack" type="function" optional="true">Method to execute after core has been initialized</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Do we have toastr, if so change default to bottom-left
            if (!!window["toastr"]) {
                toastr.options.positionClass = "toast-bottom-left";
            }

            // Hide the visuals
            if (!!!lsWire.hasBeenInitialized)
                window.document.body.classList.add('msls-collapsed');

            var initProperty;

            if (screenPropertyName != undefined)
                initProperty = screen.details.properties[screenPropertyName];

            // Make sure the system is ready
            setTimeout(function () {

                // If this is the first time run, go do our initialization
                if (!(!!lsWire.hasBeenInitialized)) {

                    // setup a global catch
                    $(window).on("error", function (e) {
                        msls.showMessageBox("There was a fatal error: " + e.originalEvent.message, {
                            title: "Big Error!"
                        });
                    });

                	// Add to our jquery ajax for auth errors
	                $(document).ajaxError(function(event, jqXHR, ajaxSettings) {
		                if (jqXHR.status === 401) {
			                location.reload();
		                };
	                });


                    // Basic requirements to run
                    lsWire.initializeShell(screen);

                    // If no direct linking
                    if (directLinkingAllowed === false) {
                        lsWire.noDirectLinking();
                        return;
                    }


                    // Modify the core commands of LightSwitch allowing for before hooks
                    lsWire.initializeBeforeShown();
                    lsWire.initializeBackCommand();
                    lsWire.initializeCancelCommand();
                    lsWire.initializeCloseCommand();
                    lsWire.initializeDiscardCommand();
                    lsWire.initializeHomeCommand();
                    lsWire.initializeLogoutCommand();
                    lsWire.initializeOkCommand();
                    lsWire.initializeSaveCommand();
                    lsWire.initializeAfterShown();

                    // Get information about the user
                    lsWire.getUserInfo();

                    // Get information about the app configuration
                    lsWire.getAppConfig();

                    // Since this is first time, we need to get our screen before its ready

                    // Run our beforeShown method, since it won't run on first initialization
                    var beforeShown = myapp[screen.details._modelId]["beforeShown"];
                    if (beforeShown != undefined)
                        beforeShown(screen);

                    // Run our after rendered call
                    setTimeout(function () {

                        var screenAfterRenderedMethod = myapp[screen.details._modelId]["afterRendered"];

                        if (screenAfterRenderedMethod != undefined) {
                            screenAfterRenderedMethod(screen);
                        };

                    }, 0);

                    // If this was a direct link... but they got back home, remove the flag
                    if (lsWire.shell._homeScreen.id != screen.details._modelId) {
                        myapp.directLinked = true;
                    }
                }

                // Make sure the tab commands are updated for each screen
                lsWire.initializeTabCommand();
                lsWire.initializeAfterClosed();

                // If a function was passed, run it
                if (callBack != undefined)
                    callBack();

                // If there is a screen property that is used for binding, set that flag
                if (initProperty != undefined)
                    initProperty.value = true;

                // Set our own internal flag
                lsWire.hasBeenInitialized = true;

                // Ok to show our document again as all the changes have taken place
                window.document.body.classList.remove("msls-collapsed");

            }, 0);

        },

        initializeAfterShown: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initializes monitoring/calling of myapp.{screenName}.afterShown(screen) 
            /// .afterShown is called right after the visual screen has been displayed
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************
            var shell = lsWire.getShell();

            if (shell != undefined) {
                shell.onchange = function (e) {
                    if (e.detail === "activeNavigationUnit" && e.type === "change") {
                        shell.finishNavigation().then(function () {
                            var anu = shell.activeNavigationUnit;
                            var init = myapp[anu.screen.details._modelId]["afterShown"];
                            if (init != undefined) {
                                init(anu.screen);
                                $("#" + anu.screen.details._pageId).focus();
                            }
                        });
                    }
                }
            }

        },

        initializeBeforeShown: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initializes monitoring/calling of myapp.{screenName}.beforeShown(screen)
            /// Will only be called once, when the screen has been initialized.
            /// Will not be called when a back button is used, etc.
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            $(window).on("pagebeforechange", function (e, navigationData) {

                var shell = lsWire.getShell();

                var pageId = null;

                if (typeof (navigationData.toPage) == "object") {

                    pageId = navigationData.toPage[0].id;
                    var page = shell.shellView._pageIdMapping[pageId];
                    if (page != undefined) {

                        var nextScreen = page.unit.screen;
                        var modelId = nextScreen.details._modelId;
                        var screenMethod = myapp[modelId]["beforeShown"];

                        if (screenMethod != undefined) {

                            // If this was a direct link... but they got back home, remove the flag
                            if (!!myapp.directLinked && lsWire.shell._homeScreen.id == modelId) {
                                delete myapp.directLinked;
                            }

                            screenMethod(nextScreen, navigationData);
                        };

                        // Run our after rendered call
                        setTimeout(function () {

                            var screenAfterRenderedMethod = myapp[modelId]["afterRendered"];

                            if (screenAfterRenderedMethod != undefined) {
                                screenAfterRenderedMethod(nextScreen, navigationData);
                            };

                        }, 0);



                    };

                };

            });

        },

        initializeTabCommand: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initializes monitoring/calling of myapp.{screenName}.beforeTabChange(screen, currentTabName, nextTabName)
            /// .beforeTabChange will be called when a user clicks on a tab, before screen changes
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var shell = lsWire.getShell();

            if (shell != undefined) {
                shell.finishNavigation().then(function () {
                    var anu = shell.activeNavigationUnit;
                    var screen = anu.screen;
                    var tabCommands = anu.task.tabCommands;

                    _.forEach(tabCommands, function (tabCommand) {

                        tabCommand.command.___method = function (n, t) {

                            var beforeTabChange = myapp[screen.details._modelId]["beforeTabChange"];

                            if ((t == undefined || t.beforeShown == undefined) && beforeTabChange != undefined) {
                                t = { beforeShown: beforeTabChange(screen, anu.pageName, n) }
                            }

                            var i = t ? t.beforeShown : null;
                            return shell.showTab(n, null, i);
                        };

                    });

                });
            }


        },

        initializeDiscardCommand: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initializes monitoring/calling of myapp.{screenName}.beforeDiscard(screen)
            /// .beforeDiscard is called before the native discard gets called, pass false to stop the discard
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var shell = lsWire.getShell();

            if (shell != undefined) {

                shell.discardCommand.command.___method = function () {

                    // Current screen we are working with
                    var scrn = shell.activeNavigationUnit.screen;

                    // Get our modelId
                    var modelId = scrn.details._modelId;

                    // What is our navigate back method
                    var navigateBackOption = "beforeSaveBoundary";

                    // Call our before boundary 
                    var beforeDiscardCommand = myapp[modelId]["beforeDiscard"];

                    if (beforeDiscardCommand != undefined) {
                        var beforeDiscardCommandResult = beforeDiscardCommand(scrn);

                        if (beforeDiscardCommandResult != undefined && beforeDiscardCommandResult.done != undefined) {

                            return beforeDiscardCommandResult.done(function (result) {

                                if (result) {
                                    if (shell.canCancelNestedChanges) {
                                        return shell.cancelNestedChanges();
                                    } else {
                                        return shell.discardChanges(navigateBackOption);
                                    }
                                } else {
                                    return false;
                                }

                            });

                        } else {

                            if (beforeDiscardCommandResult == undefined || beforeDiscardCommandResult) {
                                if (shell.canCancelNestedChanges) {
                                    return shell.cancelNestedChanges();
                                } else {
                                    return shell.discardChanges(navigateBackOption);
                                }
                            } else {
                                return false;
                            }
                        }
                    } else {
                        if (shell.canCancelNestedChanges) {
                            return shell.cancelNestedChanges();
                        } else {
                            return shell.discardChanges(navigateBackOption);
                        }
                    }
                }
            }
        },

        initializeSaveCommand: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initializes monitoring/calling of myapp.{screenName}.beforeSave(screen)
            /// .beforeSave gets called right before the native save, return false to cancel the save operation
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var shell = lsWire.getShell();

            if (shell != undefined) {

                shell.saveCommand.command.___method = function () {

                    // Current screen we are working with
                    var scrn = shell.activeNavigationUnit.screen;

                    // Get our modelId
                    var modelId = scrn.details._modelId;

                    // What is our navigate back method
                    //var navigateBackOption = "beforeSaveBoundary";
                    var navigateBackOption = "beforeSaveBoundary";

                    // Call our before boundary 
                    var beforeSaveCommand = myapp[modelId]["beforeSave"];

                    if (beforeSaveCommand != undefined) {
                        var beforeSaveCommandResult = beforeSaveCommand(scrn);

                        if (beforeSaveCommandResult != undefined && beforeSaveCommandResult.done != undefined) {

                            return beforeSaveCommandResult.done(function (result) {

                                if (result) {
                                    if (shell.canApplyNestedChanges) {
                                        return shell.applyNestedChanges(navigateBackOption);
                                    } else {
                                        return shell.saveChanges(navigateBackOption);
                                    }
                                } else {
                                    return shell.cancelChanges();
                                }

                            });

                        } else {
                            if (beforeSaveCommandResult !== false) {
                                if (shell.canApplyNestedChanges) {
                                    return shell.applyNestedChanges(navigateBackOption);
                                } else {
                                    return shell.saveChanges(navigateBackOption);
                                }
                            } else {
                                return false;
                            }
                        }
                    } else {
                        if (shell.canApplyNestedChanges) {
                            return shell.applyNestedChanges(navigateBackOption);
                        } else {
                            return shell.saveChanges(navigateBackOption);
                        }
                    }
                }
            }
        },

        initializeBackCommand: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initializes monitoring/calling of myapp.{screenName}.beforeBack(screen)
            /// .beforeBack gets call right before navigation takes blace to the previous screen, return false to cancel the operation
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var shell = lsWire.getShell();

            if (shell != undefined) {

                shell.backCommand.command.___method = function (distance) {

                    // Current screen we are working with
                    var scrn = shell.activeNavigationUnit.screen;

                    // Get our modelId
                    var modelId = scrn.details._modelId;

                    // Call our before boundary 
                    var beforeBackCommand = myapp[modelId]["beforeBack"];

                    if (beforeBackCommand != undefined) {

                        // Execute the callback
                        var beforeBackCommandResult = beforeBackCommand(scrn);

                        // If its a promise, do not navigate back until done
                        if (beforeBackCommandResult != undefined && beforeBackCommandResult.done != undefined) {

                            beforeBackCommandResult.done(function (result) {

                                // If success, navigate back
                                if (result) {
                                    shell.navigateBack(distance);
                                }
                            });

                        } else {

                            if (beforeBackCommandResult !== false) {
                                shell.navigateBack(distance);
                            }

                        }

                    } else {
                        shell.navigateBack(distance);
                    }
                }
            }
        },

        initializeHomeCommand: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initializes monitoring/calling of myapp.{screenName}.beforeHome(screen)
            /// .beforeHome gets called right before a navigateHome takes place, return a false to cancel the operation
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var shell = lsWire.getShell();

            if (shell != undefined) {

                shell.homeCommand.command.___method = function () {

                    // Current screen we are working with
                    var scrn = shell.activeNavigationUnit.screen;

                    // Get our modelId
                    var modelId = scrn.details._modelId;

                    // Call our before boundary 
                    var beforeHomeCommand = myapp[modelId]["beforeHome"];

                    if (beforeHomeCommand != undefined) {

                        // Execute the callback
                        var beforeHomeCommandResult = beforeHomeCommand(scrn);

                        // If its a promise, do not navigate back until done
                        if (beforeHomeCommandResult != undefined && beforeHomeCommandResult.done != undefined) {

                            beforeHomeCommandResult.done(function (result) {

                                // If success, navigate back
                                if (result) {
                                    shell.navigateHome();
                                }
                            });

                        } else {

                            if (beforeHomeCommandResult !== false) {
                                shell.navigateHome();
                            }

                        }

                    } else {
                        shell.navigateHome();
                    }
                }
            }
        },

        initializeCloseCommand: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initializes monitoring/calling of myapp.{screenName}.beforeClose(screen)
            /// .beforeClose gets called before a screen actually gets closed (popup), return a false to cancel the operation
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var shell = lsWire.getShell();

            if (shell != undefined) {

                shell.closeCommand.command.___method = function (distance) {

                    // Current screen we are working with
                    var scrn = shell.activeNavigationUnit.screen;

                    // Get our modelId
                    var modelId = scrn.details._modelId;

                    // Call our before boundary 
                    var beforeCloseCommand = myapp[modelId]["beforeClose"];

                    if (beforeCloseCommand != undefined) {

                        // Execute the callback
                        var beforeCloseCommandResult = beforeCloseCommand(scrn);

                        // If its a promise, do not navigate back until done
                        if (beforeCloseCommandResult != undefined && beforeCloseCommandResult.done != undefined) {

                            beforeCloseCommandResult.done(function (result) {

                                // If success, navigate back
                                if (result) {
                                    shell.navigateBack(distance);
                                }
                            });

                        } else {

                            if (beforeCloseCommandResult !== false) {
                                shell.navigateBack(distance);
                            }

                        }

                    } else {
                        shell.navigateBack(distance);
                    }
                }
            }
        },

        initializeOkCommand: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initializes monitoring/calling of myapp.{screenName}.beforeOk(screen)
            /// .beforeOk gets called right before executing the native Ok command, return a false to cancel the operation
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var shell = lsWire.getShell();

            if (shell != undefined) {

                shell.okCommand.command.___method = function () {

                    // Current screen we are working with
                    var scrn = shell.activeNavigationUnit.screen;

                    // Get our modelId
                    var modelId = scrn.details._modelId;

                    // What is our navigate back method
                    var navigateBackOption = "beforeSaveBoundary";

                    // Call our before boundary 
                    var beforeOkCommand = myapp[modelId]["beforeOk"];

                    if (beforeOkCommand != undefined) {
                        var beforeOkCommandResult = beforeOkCommand(scrn);

                        if (beforeOkCommandResult != undefined && beforeOkCommandResult.done != undefined) {

                            return beforeOkCommandResult.done(function (result) {

                                if (result) {
                                    if (shell.canApplyNestedChanges) {
                                        return shell.applyNestedChanges(navigateBackOption);
                                    } else {
                                        return shell.saveChanges(navigateBackOption);
                                    }
                                } else {
                                    return shell.cancelChanges();
                                }

                            });

                        } else {
                            if (beforeOkCommandResult !== false) {
                                if (shell.canApplyNestedChanges) {
                                    return shell.applyNestedChanges(navigateBackOption);
                                } else {
                                    return shell.saveChanges(navigateBackOption);
                                }
                            } else {
                                return false;
                            }
                        }
                    } else {
                        if (shell.canApplyNestedChanges) {
                            return shell.applyNestedChanges(navigateBackOption);
                        } else {
                            return shell.saveChanges(navigateBackOption);
                        }
                    }
                }
            }
        },

        initializeCancelCommand: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initializes monitoring/calling of myapp.{screenName}.beforeCancel(screen)
            /// .beforeCancel gets called right before executing the native Cancel command, return a false to cancel the operation
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var shell = lsWire.getShell();

            if (shell != undefined) {

                shell.cancelCommand.command.___method = function () {

                    // Current screen we are working with
                    var scrn = shell.activeNavigationUnit.screen;

                    // Get our modelId
                    var modelId = scrn.details._modelId;

                    // What is our navigate back method
                    var navigateBackOption = "beforeSaveBoundary";

                    // Call our before boundary 
                    var beforeCancelCommand = myapp[modelId]["beforeCancel"];

                    if (beforeCancelCommand != undefined) {
                        var beforeCancelCommandResult = beforeCancelCommand(scrn);

                        if (beforeCancelCommandResult != undefined && beforeCancelCommandResult.done != undefined) {

                            return beforeCancelCommandResult.done(function (result) {

                                if (result) {
                                    if (shell.canCancelNestedChanges) {
                                        return shell.cancelNestedChanges();
                                    } else {
                                        return shell.discardChanges(navigateBackOption);
                                    }
                                } else {
                                    return false;
                                }

                            });

                        } else {

                            if (beforeCancelCommandResult == undefined || beforeCancelCommandResult) {
                                if (shell.canCancelNestedChanges) {
                                    return shell.cancelNestedChanges();
                                } else {
                                    return shell.discardChanges(navigateBackOption);
                                }
                            } else {
                                return false;
                            }
                        }
                    } else {
                        if (shell.canCancelNestedChanges) {
                            return shell.cancelNestedChanges();
                        } else {
                            return shell.discardChanges(navigateBackOption);
                        }
                    }
                }
            }
        },

        initializeLogoutCommand: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initializes monitoring/calling of myapp.{screenName}.beforeLogout(screen)
            /// .beforeLogout gets called right before executing the native Logout command, return a false to cancel the operation
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var shell = lsWire.getShell();

            if (shell != undefined) {

                if (shell._isFormsAuthEnabled) {
                    shell.logoutCommand.command.___method = function () {

                        // Current screen we are working with
                        var scrn = shell.activeNavigationUnit.screen;

                        // Get our modelId
                        var modelId = scrn.details._modelId;

                        // Call our before boundary 
                        var beforeLogoutCommand = myapp[modelId]["beforeLogout"];

                        if (beforeLogoutCommand != undefined) {

                            // Execute the callback
                            var beforeLogoutCommandResult = beforeLogoutCommand(scrn);

                            // If its a promise, do not navigate back until done
                            if (beforeLogoutCommandResult != undefined && beforeLogoutCommandResult.done != undefined) {

                                beforeLogoutCommandResult.done(function (result) {

                                    // If success, navigate back
                                    if (result) {
                                        shell.shellView.logout();
                                    }
                                });

                            } else {

                                if (beforeLogoutCommandResult !== false) {
                                    shell.shellView.logout();
                                }

                            }

                        } else {
                            shell.shellView.logout();
                        }

                    };
                };
            }
        },

        initializeAfterClosed: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>)
            /// <summary>
            /// Initializes monitoring/calling of myapp.{screenName}.afterClosed(screen)
            /// .afterClosed gets called after a screen gets closed, but before it gets destroyed
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Get our shell
            var shell = lsWire.getShell();

            if (shell != undefined) {

                // Typically we should be navigating
                if (shell.navigationInProgress) {

                    // And if we are, make sure we finish our navigation
                    shell.finishNavigation().then(function () {

                        // Get our modelId
                        var modelId = shell.activeNavigationUnit.screen.details._modelId;

                        // Look for the method 
                        var afterClosedCommand = myapp[modelId]["afterClosed"];

                        if (afterClosedCommand != undefined) {

                            // Execute the callback then the passed one
                            var passedClosed = shell.activeNavigationUnit.afterClosed;
                            shell.activeNavigationUnit.afterClosed = function (s, a) {
                                afterClosedCommand(s, a);
                                passedClosed(s, a);
                            }

                        }

                    });

                }


            }

        },

        initializeShell: function (screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initialize/Get a hook into the application shell object
            /// This not the visual shell, but application shell where all the functionality lives
            /// </summary>
            /// <param name="screen" type="object">Screen object</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Has the shell been initialized already?  If so return it
            if (lsWire.shell === undefined) {

                if (msls.shell !== undefined) {
                    lsWire.shell = msls.shell;
                } else {

                    // Shortcut to our dependents
                    var dependents = screen.details.startPage._dependents;

                    // As look as we have dependents (no empty screen)
                    if (dependents !== undefined) {

                        // Get a property that has tracking info
                        var tracker = dependents['isVisible'];

                        // Now go grab a hook to the shell and stuff it
                        if (tracker[0] !== undefined)
                            lsWire.shell = tracker[0].trackingStub.o.task.shell;
                    }
                }
            }

            // return the shell
            return lsWire.shell;
        },

        getShell: function (screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// A wrapper to get a hook into the application shell object.  Use this most of the time as it will make
            /// sure the shell exists.
            /// </summary>
            /// <param name="screen" type="object" optional="false">Screen object</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            return lsWire.initializeShell(screen);

        },

        activateAllPages: function (screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Activate all pages (tabs) of a screen, works well to get the system to start getting additional data
            /// </summary>
            /// <param name="screen" type="object" optional="false">Screen object</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (screen == undefined) return;

            var screenPages = screen.details.pages;

            for (var i = 0; i < screenPages.length; i++) {
                if (screenPages[i]._isActivated === undefined) screenPages[i]._activate();
            }

        },

        activatePage: function (screen, pageName) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Activate a particular page (tab) of a screen
            /// </summary>
            /// <param name="screen" type="object" optional="false">Screen object</param>
            /// <param name="pageName" type="string" optional="false">Page (tab) name</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (screen == undefined || pageName == undefined) return;

            // Get the screen page of this tab
            var page = lsWire.getPage(pageName, screen);

            // Are we showing as being activated?  If not, activate it
            // This will allow the visual collections to load their data
            if (page._isActivated === undefined) page._activate();

        },

        // #endregion


        // #region Utility - 39 functions
        // ==========================================================


        getDataItemCount: function (screenDataItem, async) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Get an item count for the passed screen data query/item.  Will use jquery ajax call to ask the
            /// server for a total item count based on the query.
            /// </summary>
            /// <param name="screenDataItem" type="object" optional="false">Data item (query/table)</param>
            /// <returns type=""></returns>
            /// </signature>
            /// <signature>
            /// <param name="screenDataItem" type="object" optional="false">Data item (query/table)</param>
            /// <param name="async" type="boolean" optional="true">Use async or not?  Defaults to true</param>
            /// <returns type=""></returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // This is a non async function... so be aware

            var result = null;
            var ajaxCall = null;
            async = async == undefined ? true : async;

            // If there is no screenQuery item, or its a root item, then return undefined
            if (screenDataItem == undefined || screenDataItem._loader == undefined) return result;

            // If the data has already been loaded, ie by going "back", just returh the count
            if (screenDataItem.isLoaded) {
                result = screenDataItem.count;
            } else {

                // Get our query, add in that we only want a count, but need at least one field
                var url = screenDataItem._loader._baseQuery._requestUri;
                url += "&$select=Id&$inlinecount=allpages";

                // Do our call to the server, but not async, as we need to know now before continuing
                ajaxCall = $.ajax({
                    async: async,
                    dataType: "json",
                    url: url,
                    success: function (data) {
                        result = parseInt(data["odata.count"]);
                    }
                });

            };

            return async ? ajaxCall : parseInt(result);

        },

        noDirectLinking: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Wrapper to force a user from the current page and to the root of the application
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Hide any visual of where we are
            window.document.body.classList.add("msls-collapsed");

            // Now force the user to the root of the app
            window.location.replace(myapp.rootUri);

        },

        goBackOrHome: function (e, options) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Wrapper that, based on the navigation stack, will either take the user back to the previous screen or to the home screen.
            /// </summary>
            /// </signature>
            /// <signature>
            /// <param name="e" type="object" optional="true">Event object</param>
            /// </signature>
            /// <signature>
            /// <param name="e" type="object" optional="true">Event object</param>
            /// <param name="callBack" type="function" optional="true">Function to run before navigation actually takes place</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // if we have an event object, prevent the obvious
            if (e != undefined && e["preventDefault"] != undefined) {
                e.preventDefault();
                e.stopPropagation();
            }

	        if (options == undefined) options = {};

	        // If navigation is still in progress we can't move, so show message and return
            if (lsWire.getShell().navigationInProgress) {
                msls.showMessageBox("There is a problem navigating back... \nTry again or you will need to refresh your browser... my appologies.");
            } else {

                var beforeNavigationResult;
                var canGoBack = _.size(lsWire.getShell().navigationStack) > 1;

                // Run user passed method/function
                if (options.beforeNavigation != undefined) {
                    beforeNavigationResult = options.beforeNavigation(canGoBack);
                }

                beforeNavigationResult = beforeNavigationResult == undefined ? true : beforeNavigationResult;

                // Finally make decision of whether we can go back to need to just go home
                if (beforeNavigationResult) {

                    var replaceNavigationResult = false;

                    // If a replacement navigation logic was passed, run it
                    if (options.replaceNavigation != undefined) {

                        replaceNavigationResult = options.replaceNavigation(e, canGoBack);
                        replaceNavigationResult = replaceNavigationResult == undefined ? true : replaceNavigationResult;

                    }

                    // If result from replacement nav was false, go run the default 
                    if (!replaceNavigationResult) {
                        if (canGoBack) {
                            myapp.navigateBack();
                        } else {
                            myapp.navigateHome();
                        }
                    }
                }
            }
        },

        getStyleSheet: function (sheetId) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Retrieve a style sheet based on its Id or Title
            /// </summary>
            /// <param name="sheetId" type="string" optional="false">sheetId can be either an ID property or Title property</param>
            /// <returns type="object">Stylesheet object</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Lets look for the sheet
            for (var i = 0; i < document.styleSheets.length; i++) {
                var sheet = document.styleSheets[i];
                if (sheet.title === sheetId || sheet.id === sheetId) {
                    return sheet;
                }
            }

            return undefined;
        },

        getStyleRule: function (sheet, ruleSelector) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Get a Style Rule, from which you can manipulate
            /// </summary>
            /// <param name="sheet" type="object" optional="false">Stylesheet object</param>
            /// <param name="ruleSelector" type="string" optional="false">CSS Rule selector</param>
            /// <returns type="object">Style rule</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Our return value
            var rule = undefined;

            if (sheet !== undefined && sheet !== null) {
                // Find our rule based on its selector

                var rules = sheet.cssRules == undefined ? sheet.rules : sheet.cssRules;

                _.find(rules, function (r, v) {

                    if (r.selectorText === ruleSelector) {
                        rule = { index: v, rule: r }
                        return true;
                    } else {
                        return false;
                    }

                });

            }

            return rule;
        },

        changeStyleRule: function (sheetId, ruleSelector, styleProperties) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Add/change a style rule
            /// </summary>
            /// <param name="sheetId" type="string" optional="false">sheetId can be either an ID property or Title property</param>
            /// <param name="ruleSelector" type="string" optional="false">CSS rule selector, ie: .msls-tabs-bar (with period) If styleProperties is null or undefined, the rule will be deleted</param>
            /// </signature>
            /// <signature>
            /// <param name="sheetId" type="string" optional="false">sheetId can be either an ID property or Title property</param>
            /// <param name="ruleSelector" type="string" optional="false">CSS rule selector, ie: .msls-tabs-bar (with period)</param>
            /// <param name="styleProperties" optional="true">Properties for the rule, ie: [{name: nameValue, value: value}]. If styleProperties is null or undefined, the rule will be deleted</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Get our style sheet
            var sheet = lsWire.getStyleSheet(sheetId);

            // Get our rule from the sheet
            var ruleObj = lsWire.getStyleRule(sheet, ruleSelector);

            // If no style properties, delete the rule
            if (styleProperties !== undefined && styleProperties !== null) {
                // It does not exist, so lets go add it
                if (ruleObj === undefined || ruleObj === null) {

                    // Stringify our properties
                    var styleString = "";

                    styleProperties.forEach(function (i) {
                        styleString += i.name + ":" + i.value + ";";
                    });

                    var ruleLocation = sheet.cssRules == undefined ? sheet.rules.length : sheet.cssRules.length;

                    // Add our new rule			
                    sheet.addRule(ruleSelector, styleString, ruleLocation);

                    // It does exist, so lets update the properties only
                } else {

                    styleProperties.forEach(function (i) {
                        ruleObj.rule.style[i.name] = i.value;
                    });

                }
            } else {
                if (ruleObj !== undefined && ruleObj !== null) {
                    sheet.deleteRule(ruleObj.index);
                }

            }

        },

        getParentByTagName: function (element, tagName) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Find the parent of an element that matches a tag name, non jQuery
            /// </summary>
            /// <param name="element" type="object" optional="false">DOM Element</param>
            /// <param name="tagName" type="string" optional="false">Tag name to locate</param>
            /// <returns type="object">DOM element or null if not found</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (element == undefined || tagName == undefined) return null;

            var foundElement = element;
            tagName = tagName.toUpperCase();

            while (foundElement && foundElement.tagName !== tagName) {
                foundElement = foundElement.parentElement;
            }

            return foundElement;

        },

        getParentByClassName: function (element, className) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Find the parent of an element that matches a class name, non jQuery.
            /// </summary>
            /// <param name="element" type="object" optional="false">DOM Element</param>
            /// <param name="className" type="string" optional="false">Class name to locate</param>
            /// <returns type="object">DOM element or null if not found</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (element == undefined || className == undefined) return null;

            var foundElement = element;

            while (foundElement && !foundElement.classList.contains(className)) {
                foundElement = foundElement.parentElement;
            }

            return foundElement;

        },

        onceElementAttrChange: function (element, attrName, method) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Monitor the attribute of a DOM element, when it changes, fire off the method
            /// </summary>
            /// <param name="element" type="object" optional="false">DOM Element of the control</param>
            /// <param name="attrName" type="string" optional="false">Name of the attribute to monitor</param>
            /// <param name="method" type="object" optional="false">Method to execute when the attribute changes</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (element == undefined || attrName == undefined || method == undefined) return null;

            var $element = $(element);
            var origValue = $element.css(attrName);
            monitorAttr();

            function monitorAttr() {
                if ($element.css(attrName) !== origValue) {
                    $element.trigger(attrName + 'Change');
                    method();
                    return null;
                }

                setTimeout(monitorAttr, 50);
                return null;
            }

            return null;

        },

        createUid: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Generate unique id's... we only care about session based
            /// Could also use the function available in lodash
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },

        fixMetadataHandlerForEtag1: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Fix for issues around ETag, still exists as of March 2014 update. Call this one first. Then call
            /// fixJsonHandlerForEtag2
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // *****************************************************************************************************
            // *****************************************************************************************************
            // Low level fix for issues around ETag missing in properties
            // You can review this fix from a Microsoft TechNet article at:
            // http://social.technet.microsoft.com/wiki/contents/articles/20718.the-etag-value-in-the-request-header-does-not-match-with-the-current-etag-of-the-object.aspx
            // I have done a few changes from the original article so that it works
            // across all feeds.  Original article missed an important piece and is noted 
            // in the code below
            // *****************************************************************************************************
            // *****************************************************************************************************


            window.origMetadataReadFunc = window.OData.metadataHandler.read;
            window.OData.metadataHandler.read = function (response, context) {
                origMetadataReadFunc.call(window.OData.metadataHandler, response, context);
                var data = response.data,
					schema = data && data.dataServices && data.dataServices.schema && data.dataServices.schema[0],
					entities = schema && schema.entityType || [];
                entities.forEach(function (entity) {
                    var i,
						properties = entity.property || [];
                    for (i = properties.length - 1; i >= 0; i--) {
                        var property = properties[i];
                        if (property.name === "Microsoft_LightSwitch_ETag") {
                            property.type = "Edm.String";
                            break;
                        }
                    }
                });
            };
        },

        fixJsonHandlerForEtag2: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Fix for issues around ETag, still exists as of March 2014 update. Call fixMetadataHandlerForEtag1 first.
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            window.origJsonReadFunc = window.OData.jsonHandler.read;
            window.OData.jsonHandler.read = function (response, context) {
                var result = origJsonReadFunc.call(window.OData.jsonHandler, response, context);

                var data = response.data, results = data.results;
                if (results) {
                    results.forEach(function (entity) {
                        if (entity.__metadata.etag) {
                            var etag = entity.__metadata.etag,
								firstIndex = etag.indexOf("'"),
								lastIndex = etag.lastIndexOf("'"),
								coreEtag = "";
                            for (var i = firstIndex + 1; i < lastIndex; i++) {
                                var chr = etag[i];
                                coreEtag += chr;
                                if (chr == "'") {
                                    coreEtag += "'";
                                    if (etag[i + 1] == "'") {
                                        i++;
                                    }
                                }
                            }
                            // Missing from the original TechNet article.  Only do the fix if
                            // the remote service actually sent an ETag
                            if (firstIndex > 0) {
                                entity.__metadata.etag = etag.substr(0, firstIndex + 1) + coreEtag + etag.substr(lastIndex);
                            }
                        }
                    });
                }

                return result;
            };
        },

        getUrlParameterByName: function (name) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Get URL Parameter by its name
            /// </summary>
            /// <param name="name" type="string" optional="false">Name of the parameter to fetch</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (name == undefined) return null;

            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(window.location);
            if (results == null)
                return "";
            else
                return decodeURIComponent(results[1].replace(/\+/g, " "));

        },

        roundUp: function (value, precision) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Rounds a number up to a certain precision
            /// </summary>
            /// <param name="value" type="number" optional="false">Number to round up</param>
            /// <returns type="number">Result of the rounding</returns>
            /// </signature>
            /// <signature>
            /// <param name="value" type="number" optional="false">Number to round up</param>
            /// <param name="precision" type="number" optional="true">Number of decimal places, defaults to 2</param>
            /// <returns type="number">Result of the rounding</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            precision = precision == undefined ? 2 : precision;

            var power = Math.pow(10, precision);
            var poweredValue = Math.ceil(value * power);

            return poweredValue / power;

        },

        nbSpaces: function (count) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Creates a string with HTML non breaking spaces
            /// </summary>
            /// <param name="count" type="number" optional="false">Length</param>
            /// <returns type="string">String containing the specified number of non breaking spaces</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (count == undefined) return "";

            var text = "";

            for (var i = 0; i < count - 1; i++) {
                text += "&nbsp;";
            }

            return text;
        },

        iterateOverChildren: function (parent, callBack, propertyName) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Iterate over children until no children are left, executing passed function for each child object. 
            /// </summary>
            /// <param name="parent" type="object" optional="false">Top level object to start</param>
            /// <param name="callBack" type="function" optional="false">Method to call on each child object</param>	
            /// </signature>
            /// <signature>
            /// <param name="parent" type="object" optional="false">Top level object to start</param>
            /// <param name="callBack" type="function" optional="false">Method to call on each child object</param>	
            /// <param name="propertyName" type="string" optional="true">Name of the property to iterate over, defaults to "children"</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (parent == undefined || callBack == undefined) return;

            propertyName = propertyName == undefined ? "children" : propertyName;

            if (parent) {

                _.each(parent[propertyName], function (child) {

                    callBack(child);

                    lsWire.iterateOverChildren(child, callBack);
                });

            }

        },

        getNestedPropertyValue: function (parent, bindingPath) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Iterate over the passed binding path to get the value of the property.  Allows getting by string.
            /// </summary>
            /// <param name="parent" type="object" optional="false">Top level object to start</param>
            /// <param name="bindingPath" type="string" optional="false">What binding path are we looking for</param>	
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var result;

            if (bindingPath != undefined) {
                var pathElements = bindingPath.split('.');

                if (pathElements) {

                    _.each(pathElements, function (property, index) {

                        if (parent[property] != undefined) {
                            if (pathElements.length - 1 == index) {
                                result = parent[property];
                            } else {
                                parent = parent[property];
                            }
                        }

                    });

                }
            }

            return result;

        },

        sendGoogleAnalyticsScreenHit: function (title) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Send page information to google analytics if configured and enabled
            /// </summary>
            /// </signature>
            /// <signature>
            /// <param name="title" type="string" optional="true">Title you would like to use for googles dashboard</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (window.ga != undefined) {
                title = title == undefined ? lsWire.getActiveScreen().details._modelId : title;

                ga('send', {
                    'hitType': 'pageview',
                    'page': '' + window.location.hash.split('[')[0],
                    'title': title
                });
            }
        },

        browserIsIE: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Is the browser we are in, Internet Explorer
            /// </summary>
            /// <returns type="boolean">true if the browser is IS else false</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            return _.contains(window.navigator.userAgent.toLowerCase(), "msie");
        },

        browserIsSafari: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Is the browser we are in, Safari
            /// </summary>
            /// <returns type="boolean">true if its Safari else false</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var userAgent = window.navigator.userAgent.toLowerCase();

            return (!_.contains(userAgent, "chrome") && _.contains(userAgent, "safari"));
        },

        dataHasChanges: function (modelId, typeOfChange) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Does any of the data changes belong to the passed modelId, can also pass an optional type of change
            /// </summary>
            /// <param name="modelId" type="string" optional="false">Model Id we want to search for changes</param>
            /// <returns type="boolean">true if any changes/edits belong to the model</returns>
            /// </signature>
            /// <signature>
            /// <param name="modelId" type="string" optional="false">Model Id we want to search for changes</param>
            /// <param name="typeOfChange" type="string" optional="true">What type of change are you looking for, deleted, edited, added</param>
            /// <returns type="boolean">true if any changes/edits belong to the model</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (modelId == undefined) return null;

            // Search thru the data changes for items belonging to the passed model
            var changes = myapp.activeDataWorkspace.ApplicationData.details.getChanges();

            return _.any(changes, function (entity) {
                return (entity.details._model.id == modelId)
					&& (typeOfChange == undefined ? true : entity.details.entityState == typeOfChange);
            });

        },

        changeDocumentTitle: function (title) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Wrapper to change the title of our HTML document.  This directly will show as the title on the browser tab
            /// </summary>
            /// <param name="title" type="string" optional="false">Title to use for the document</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            setTimeout(function () {
                document.title = title;
            }, 0);
        },

        mergeTemplateWithData: function (template, screen, entity) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Merges data with a handlbar'ish template string, allows for dynamic merging based only on the template
            /// </summary>
            /// <param name="template" type="string" optional="false">Our template with the handlebars</param>
            /// <returns type="string">A string with the merged data</returns>
            /// </signature>
            /// <signature>
            /// <param name="template" type="string" optional="false">Our template with the handlebars</param>
            /// <param name="screen" type="object" optional="true">The screen we will look for properties as the data fields</param>
            /// <returns type="string">A string with the merged data</returns>
            /// </signature>
            /// <signature>
            /// <param name="template" type="string" optional="false">Our template with the handlebars</param>
            /// <param name="screen" type="object" optional="true">The screen we will look for properties as the data fields</param>
            /// <param name="entity" type="object" optional="true">The entity we will look into for the data fields</param>
            /// <returns type="string">A string with the merged data</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // If template is null or undefined return
            if (template == undefined) return undefined;

            // Split the newTabName into pieces and return only the ones with a handlebar
            var mergeFields = _.filter(template.split(" "), function (e) {
                return _.contains(e, "{{" && "}}");
            });

            // Next remove the handlebars totally, giving us our actual property names
            mergeFields = _.map(mergeFields, function (field) {
                return {
                    token: field,
                    property: field.replace(/[{}]/g, ""),
                    value: null
                }
            });

            // Now for each property name
            _.forEach(mergeFields, function (field) {

                // Priority are screen contentItems, but if no screen, skip
                if (screen != undefined) {
                    var foundItem = screen.findContentItem(field.property);

                    // If found, get its value
                    if (foundItem) {
                        field.value = foundItem.value != undefined ? foundItem.value.toString() : "";
                    }
                }

                // If no entity, skip
                if (entity != undefined) {
                    // If value is still null, lets check for an entity property
                    if (lsWire.isEmpty(field.value)) {
                        field.value = entity[field.property] != undefined ? entity[field.property].toString() : "";
                    }
                }

                // Replace our value into the text
                if (field.value != undefined) {
                    template = template.replace(field.token, field.value);
                }
            });

            return template;
        },

        on: function (parentObject, eventName, callBack) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Easily create an event handler on the object
            /// </summary>
            /// <param name="parentObject" type="object" optional="false">The parent object that we will add our listener</param>
            /// <param name="eventName" type="string" optional="false">What event do we want to listen for</param>
            /// <param name="callBack" type="function" optional="false">Function to call once the event gets fired</param>
            /// <returns type="object">Our event object.  Use for removing the listener when you are done</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var eventObject = null;

            if (parentObject != undefined && parentObject.addEventListener != undefined && eventName != undefined && callBack != undefined) {
                parentObject.addEventListener(eventName, callBack);

                eventObject = { object: parentObject, event: eventName, callBack: callBack };

                var anu = lsWire.getShell().activeNavigationUnit;

                if (anu.lsWireEventObjects == undefined)
                    anu.lsWireEventObjects = [];

                anu.lsWireEventObjects.push(eventObject);
            }

            return eventObject;
        },

        off: function (eventObject) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Removes an event listener.
            /// </summary>
            /// <param name="eventObject">Event object that gets created with the on function</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (eventObject.object != undefined && eventObject.event != undefined && eventObject.callBack != undefined) {

                eventObject.removeEventListener(eventObject.event, eventObject.callBack);

                var anu = lsWire.getShell().activeNavigationUnit;

                if (anu.lsWireEventObjects != undefined && anu.lsWireEventObjects.length > 0) {

                    anu.lsWireEventObjects = _.remove(anu.lsWireEventObjects, function (e) {
                        return (eventObject.object == e.object && eventObject.event == e.event && eventObject.callBack == e.callBack);
                    });

                }
            }

        },

        allOff: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Removes all active listeners we've created.  Good cleanup for after a screen gets closed.
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var anu = lsWire.getShell().activeNavigationUnit;

            if (anu.lsWireEventObjects != undefined && anu.lsWireEventObjects.length > 0) {

                _.forEach(anu.lsWireEventObjects, function (e) {
                    e.object.removeEventListener(e.event, e.callBack);
                });

            }
        },

        isEmpty: function (obj) {
            return obj == undefined || obj.length == 0;
        },

        resolveKeyCode: function (keyOrCode) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Resolve an integer to its keyboard key equivalant
            /// </summary>
            /// <param name="keyOrCode" type="integer" optional="false">Number to resolve to its keyboard key</param>
            /// <returns type="string">Keyboard key</returns>
            /// </signature>
            /// <signature>
            /// <summary>
            /// Resolve a keyboard key string to its key code equivalant
            /// </summary>
            /// <param name="keyOrCode" type="string" optional="false">String representing the keyboard key</param>
            /// <returns type="integer">Keyboard key code</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var map = [
                { key: "backspace", code: 8 },
                { key: "tab", code: 9 },
                { key: "enter", code: 13 },
                { key: "shift", code: 16 },
                { key: "ctrl", code: 17 },
                { key: "alt", code: 18},
                { key: "break", code: 19},
                { key: "caps lock", code: 20 },
                { key: "escape", code: 27},
                { key: "page up", code: 33},
                { key: "page down", code: 34},
                { key: "end", code: 35},
                { key: "home", code: 36 },
                { key: "left arrow", code: 37 },
                { key: "up arrow", code: 38 },
                { key: "right arrow", code: 39 },
                { key: "down arrow", code: 40 },
                { key: "insert", code: 45 },
                { key: "delete", code: 46 },
                { key: "0", code: 48},
                { key: "1", code: 49},
                { key: "2", code: 50},
                { key: "3", code: 51},
                { key: "4", code: 52},
                { key: "5", code: 53},
                { key: "6", code: 54},
                { key: "7", code: 55},
                { key: "8", code: 56},
                { key: "9", code: 57},
                { key: "a", code: 65},
                { key: "b", code: 66},
                { key: "c", code: 67},
                { key: "d", code: 68},
                { key: "e", code: 69},
                { key: "f", code: 70},
                { key: "g", code: 71},
                { key: "h", code: 72},
                { key: "i", code: 73},
                { key: "j", code: 74},
                { key: "k", code: 75},
                { key: "l", code: 76},
                { key: "m", code: 77},
                { key: "n", code: 78},
                { key: "o", code: 79},
                { key: "p", code: 80},
                { key: "q", code: 81},
                { key: "r", code: 82},
                { key: "s", code: 83},
                { key: "t", code: 84},
                { key: "u", code: 85},
                { key: "v", code: 86},
                { key: "w", code: 87},
                { key: "x", code: 88},
                { key: "y", code: 89},
                { key: "z", code: 90},
                { key: "left window key", code: 91},
                { key: "right window key", code: 92 },
                { key: "select key", code: 93 },
                { key: "numpad 0", code: 96},
                { key: "numpad 1", code: 97},
                { key: "numpad 2", code: 98},
                { key: "numpad 3", code: 99},
                { key: "numpad 4", code: 100},
                { key: "numpad 5", code: 101},
                { key: "numpad 6", code: 102},
                { key: "numpad 7", code: 103},
                { key: "numpad 8", code: 104},
                { key: "numpad 9", code: 105},
                { key: "multiply", code: 106},
                { key: "add", code: 107},
                { key: "subtract", code: 109},
                { key: "decimal point", code: 110},
                { key: "divide", code: 111},
                { key: "f1", code: 112},
                { key: "f2", code: 113},
                { key: "f3", code: 114},
                { key: "f4", code: 115},
                { key: "f5", code: 116},
                { key: "f6", code: 117},
                { key: "f7", code: 118},
                { key: "f8", code: 119},
                { key: "f9", code: 120},
                { key: "f10", code: 121},
                { key: "f11", code: 122},
                { key: "f12", code: 123},
                { key: "num lock", code: 144},
                { key: "scroll lock", code: 145},
                { key: ";", code: 186},
                { key: "=", code: 187},
                { key: ",", code: 188},
                { key: "-", code: 189},
                { key: ".", code: 190},
                { key: "/", code: 191},
                { key: "`", code: 192},
                { key: "[", code: 219},
                { key: "\\", code: 220},
                { key: "]", code: 221},
                { key: "'", code: 222}
            ];

            var result;

            if (typeof keyOrCode == "string") {
                result = _.find(map, { key: keyOrCode });
            } else {
                result = _.find(map, { code: keyOrCode });
            }

            return result;

        },

        enableKeyboardShortcut: function (screen, ctrlOrAlt, key, callBack, stopPropagation) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Enable a keyboard shortcut.  Great for opening search (alt-s), saving data (ctrl-s), etc
            /// </summary>
            /// <param name="screen" type="object" optional="false">Screen object</param>
            /// <param name="ctrlOrAlt" type="string" optional="false">Either ctrl or alt keys will be accepted</param>
            /// <param name="key" type="string/integer" optional="false">What actual key or keycode are we listening for, combined with ctrl/alt</param>
            /// <param name="callBack" type="function" optional="false">Function to call when the key combination is hit</param>
            /// <returns type="string">The id we assign to this shortcut, used for disabling</returns>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="false">Screen object</param>
            /// <param name="ctrlOrAlt" type="string" optional="false">Either ctrl or alt keys will be accepted</param>
            /// <param name="key" type="string/integer" optional="false">What actual key or keycode are we listening for, combined with ctrl/alt</param>
            /// <param name="callBack" type="function" optional="false">Function to call when the key combination is hit</param>
            /// <param name="stopPropagation" type="boolean" optional="true">Stop all propagation/bubbling of the event</param>
            /// <returns type="string">The id we assign to this shortcut, used for disabling</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // If any parameter is missing, return... we need them all
            if (screen == undefined || ctrlOrAlt == undefined || key == undefined)
                return null;

            // Do we have a structure to store our shortcuts, if not create it
            if (lsWire.keyboardShortcuts == undefined) lsWire.keyboardShortcuts = {};

            // We are going to resolve by keycode and not actual character
            if (typeof key == "string") {
                var keyObj = lsWire.resolveKeyCode(key.toLowerCase());
                if (keyObj != undefined) {
                    key = keyObj.code;
                } else {
                    return null;
                }
            }

            // Create the id for the shortcut
            var guid = lsWire.createUid();
            var shortcutId = "keydown.lsWire_" + guid;
            var screenId = "#" + screen.details._pageId;

            // If the shortcut does not exist in our storage, put it there
            if (lsWire.keyboardShortcuts[shortcutId] == undefined) {

                // Create our object to track internally
                lsWire.keyboardShortcuts[shortcutId] = {
                    screenId: screenId,
                    shortcutId: shortcutId,
                    specialKey: ctrlOrAlt,
                    key: key,
                    callBack: function (event) {

                        // All will get this, yep its a dupe and are better ways, but for now, it is this
//                        if (event.ctrlKey || event.altKey) {

                            // Get our key to match
//                            if (event.keyCode != undefined && event.keyCode != "") {
                                //var keydown = String.fromCharCode(event.keyCode).toLowerCase();
                                //var keydown = event.key.toLowerCase();

                                // If its not close, then return immediately
                                //if (keydown != key) return;

                                // If we have a match for this binding, execute our callback
                                if (event[ctrlOrAlt] && event.keyCode == key) {
                                    if (stopPropagation) {
                                        event.stopPropagation();
                                        event.preventDefault();
                                    };
                                    callBack(event);
                                }
//                            }
//                        }
                    }
                };
            };


            // First... Do we need to get rid of any non lsWire shortcut?
            var handlers = lsWire.getAllDOMHandlers($(screenId)[0], "keydown");
            if (!_.any(handlers, function (h) { return _.contains(h.namespace, "lsWire"); })) {
                $(screenId).off("keydown");
            };

            // We got this far, so we should be good to do our binding
            if (lsWire.keyboardShortcuts[shortcutId] != undefined) {
                $(screenId).on(shortcutId, lsWire.keyboardShortcuts[shortcutId].callBack);
            }

            return shortcutId;

        },

        removeKeyboardShortcut: function (shortcutId) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Removes a keyboard shortcut handler based on the passed Id
            /// </summary>
            /// <param name="shortcutId" type="string" optional="false">The Id that gets assigned when created</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (shortcutId == undefined) return;

            var shortcut = lsWire.keyboardShortcuts[shortcutId];

            if (shortcut != undefined) {
                $(shortcut.screenId).off(shortcutId, lsWire.keyboardShortcuts[shortcutId].callBack);
                delete lsWire.keyboardShortcuts[shortcutId];
            }
        },

        removeAllKeyboardShortcuts: function (screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Remove all keyboard shortcuts that we create
            /// </summary>
            /// <param name="screen" type="object" optional="true">Screen object</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // If we have any shortcuts to work
            if (_.size(lsWire.keyboardShortcuts) == 0) return;

            // Default to all shortcuts
            var shortcuts = lsWire.keyboardShortcuts;

            // If a screen was passed... only delete the shortcuts for that screen
            if (screen != undefined) {
                var screenId = "#" + screen.details._pageId;
                shortcuts = _.filter(lsWire.keyboardShortcuts, function (e) { return e.screenId == screenId; });
            }

            // Go thru each stored handler, and unbind
            _.forEach(shortcuts, function (e) {
                $(e.screenId).off(e.shortcutId);
                delete lsWire.keyboardShortcuts[e.shortcutId];
            });

        },

        getAllDOMHandlers: function (element, trigger, namespace) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Wrapper to get all the active handlers in the DOM for a particular trigger.  Tuff to find this!
            /// </summary>
            /// <param name="element" type="HTMLElement" optional="false">What element shall we start looking from, document, body, etc.</param>
            /// <returns type="array">Array of matching handlers</returns>
            /// </signature>
            /// <signature>
            /// <param name="element" type="HTMLElement" optional="false">What element shall we start looking from, document, body, etc.</param>
            /// <param name="trigger" type="string" optional="true">What trigger (event) are you looking for, if not passed, returns them all</param>
            /// <returns type="array">Array of matching handlers</returns>
            /// </signature>
            /// <signature>
            /// <param name="element" type="HTMLElement" optional="false">What element shall we start looking from, document, body, etc.</param>
            /// <param name="trigger" type="string" optional="true">What trigger (event) are you looking for, if not passed, returns them all</param>
            /// <param name="namespace" type="string" optional="true">Is there a namespace for the trigger?  And yes, they can have namespaces assigned!</param>
            /// <returns type="array">Array of matching handlers</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var triggerHandlers = [];

            // Get all the events assigned for this element, not a jQuery element btw
            var events = $._data(element, "events");

            // If there are events for this element
            if (!!events) {

                // See if there is one with the name of our trigger, get the handlers if so
                triggerHandlers = events[trigger];

                // If we were asked to check for a namespace, go find them
                if (!!namespace) {
                    triggerHandlers = _.filter(triggerHandlers, function (handler) {
                        return handler.namespace == namespace;
                    });
                }
            }

            // Return an array of our handlers, or empty array
            return triggerHandlers;
        },

        removeDisplayNameListener: function (screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Wrapper to remove the listener on the displayName property.  Lightswitch automatically does this.
            /// And it messes up with updating of the document title that we use for SEO, Analytics and bookmarking
            /// </summary>
            /// <param name="screen" type="object" optional="false">Screen object</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (screen == undefined) return;

            screen.details.removeChangeListener("displayName", screen.details._listeners.displayName_change[0].listener);
        },

        getWhatsChanged: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Just a good to have function to help with debugging.  Gets exactly what has changed in the data.
            /// </summary>
            /// <returns type="array">Array that identifies exactly what has changed in the data.  Including original/current values.
            /// All in a nice package vs the buried LightSwitch way.</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var changes = myapp.activeDataWorkspace.details.getChanges();
            var changeSummary = [];

            _.forEach(changes, function (e) {
                var summary = {
                    entityId: e.Id,
                    modelId: e.details._model.id,
                    state: e.details.entityState,
                    whatChanged: [],
                };

                var keys = _.keys(e.details._);
                keys = _.filter(keys, function (key) { return _.contains(key, "IsEdited"); });

                _.forEach(keys, function (property) {
                    property = property.replace("_IsEdited", "").replace(/_/g, "");
                    var changed = {
                        propertyName: property,
                        valueBefore: e.details._.__original[property],
                        valueNow: e.details._[property]
                    }

                    summary.whatChanged.push(changed);

                });

                changeSummary.push(summary);
            });

            return changeSummary;
        },

        saveToLocalStorage: function (key, value, useSession) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Save data to the local data store
            /// </summary>
            /// <param name="key" type="string" optional="false">What key name shall we assign this value too</param>
            /// <param name="value" type="object" optional="false">Value we will be storing</param>
            /// <returns type="boolean">True if saved successfully else false</returns>
            /// </signature>
            /// <signature>
            /// <param name="key" type="string" optional="false">What key name shall we assign this value too</param>
            /// <param name="value" type="object" optional="false">Value we will be storing</param>
            /// <param name="useSession" type="boolean" optional="true">Only store for this session? Send true if so</param>
            /// <returns type="boolean">True if saved successfully else false</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var result = false;

            if (typeof (Storage) !== "undefined") {

                var storageType = !!useSession ? "sessionStorage" : "localStorage";

                try {
                    window[storageType].setItem(key, value);
                    result = true;
                } catch (e) {
                    result = false;
                }

            }

            return result;

        },

        getFromLocalStorage: function (key, useSession) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Get the value from local store based on the passed key
            /// </summary>
            /// <param name="key" type="string" optional="false">What is the key name we are looking for</param>
            /// <returns type="object">If key is found, the value stored, else null</returns>
            /// </signature>
            /// <signature>
            /// <param name="key" type="string" optional="false">What is the key name we are looking for</param>
            /// <param name="useSession" type="boolean" optional="true">Are we to retrieve from session store?</param>
            /// <returns type="object">If key is found, the value stored, else null</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var result = null;

            if (typeof (Storage) !== "undefined") {

                var storageType = !!useSession ? "sessionStorage" : "localStorage";

                try {
                    result = window[storageType].getItem(key);
                } catch (e) {
                    result = null;
                }

            }

            return result;
        },

        removeFromLocalStorage: function (key, useSession) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Remove a key and its associated value from local store
            /// </summary>
            /// <param name="key" type="string" optional="false">Name of the key to remove</param>
            /// <returns type="boolean">True if successful removal, else null</returns>
            /// </signature>
            /// <signature>
            /// <param name="key" type="string" optional="false">Name of the key to remove</param>
            /// <param name="useSession" type="boolean" optional="true">Remove from session store?</param>
            /// <returns type="boolean">True if successful removal, else null</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var result = null;

            if (typeof (Storage) !== "undefined") {

                var storageType = !!useSession ? "sessionStorage" : "localStorage";

                try {
                    window[storageType].removeItem(key);
                    result = true;
                } catch (e) {
                    result = null;
                }

            }

            return result;
        },

        removeAllFromLocalStorage: function (useSession) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Removes all items from our local store for this app
            /// </summary>
            /// <returns type="boolean">True if successful removal, else null</returns>
            /// </signature>
            /// <signature>
            /// <param name="useSession" type="boolean" optional="true">Remove from session?</param>
            /// <returns type="boolean">True if successful removal, else null</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var result = null;

            if (typeof (Storage) !== "undefined") {

                var storageType = !!useSession ? "sessionStorage" : "localStorage";

                try {
                    window[storageType].clear();
                    result = true;
                } catch (e) {
                    result = null;
                }

            }

            return result;
        },

        changeTheme: function (currentThemeName, newThemeName) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Wrapper to easily change the stylesheet theme for the application
            /// </summary>
            /// <param name="currentThemeName" type="string" optional="false">Current 'color/theme' name</param>
            /// <param name="newThemeName" type="string" optional="false">New 'color/theme' name</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (currentThemeName == undefined || newThemeName == undefined) return;

            var themeCss = _.filter(window.document.head.getElementsByTagName("link"), function (link) {
                return _.contains(link.href.toLowerCase(), "theme");
            });

            _.forEach(themeCss, function (e) {
                var href = e.href.toLowerCase();

                // Break the url up to url and filename
                var splitAt = href.lastIndexOf('/');
                var domain = href.substring(0, splitAt);
                var file = href.substr(splitAt);

                // Now replace the color for the theme
                file = file.replace(currentThemeName, newThemeName);

                // Add them back together
                href = domain + file;

                // And reset the url for the stylesheet
                e.href = href;
            });

        },

        // #endregion


        // #region Security - 11 functions 
        // ==========================================================


        userHasPermission: function (permissionId, useLocal) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Check with Web.Api if the current user has a certain permission
            /// </summary>
            /// <param name="permissionId" type="string" optiona="false">LightSwitch PermissionId</param>
            /// <returns type="boolean">true/false</returns>
            /// </signature>
            /// <signature>
            /// <param name="permissionId" type="string" optiona="false">LightSwitch PermissionId</param>
            /// <param name="useLocal" type="boolean" optional="true">Use the local user cache</param>
            /// <returns type="boolean">true/false</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (permissionId == undefined) return false;

            var results = false;

            if (!!useLocal && lsWire.userInfo != undefined) {
                results = _.contains(lsWire.userInfo.Permissions, permissionId);
            } else {
                $.ajax({
                    async: false,
                    url: "/api/security/userHasPermission/" + permissionId,
                    success: function (data) {
                        results = data;
                    }
                });
            }

            return results;

        },

        userHasRole: function (roleId, useLocal) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Check with Web.Api if the current user has a certain role assignment
            /// </summary>
            /// <param name="roleId" type="string">Name of the role</param>
            /// <returns type="boolean">true/false</returns>
            /// </signature>
            /// <signature>
            /// <param name="roleId" type="string">Name of the role</param>
            /// <param name="useLocal" type="boolean" optional="true">Use the local user cache</param>
            /// <returns type="boolean">true/false</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (roleId == undefined) return false;

            var results = false;

            if (!!useLocal && lsWire.userInfo != undefined) {
                results = _.contains(lsWire.userInfo.Roles, roleId);
            } else {
                $.ajax({
                    async: false,
                    url: "/api/security/userHasRole/" + roleId,
                    success: function (data) {
                        results = data;
                    },
                    error: function () {
                    }
                });
            }

            return results;
        },

        getUserInfo: function (forceUpdate) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Get information about the current user, based on a Web.Api call
            /// Stores the result in lsWire.userInfo
            /// </summary>
            /// <returns type="object">Object holding information about the user</returns>
            /// </signature>
            /// <signature>
            /// <param name="forceUpdate" type="boolean" optional="true">Force update from the server</param>
            /// <returns type="object">Object holding information about the user</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (lsWire.userInfo == undefined || forceUpdate) {
                $.ajax({
                    async: false,
                    url: "/api/Security/GetUserInfo",
                    success: function (data) {
                        lsWire.userInfo = data;
                    },
                    error: function () {
                        lsWire.userInfo = null;
                    }
                });
            }

            if (lsWire.userInfo === undefined)
                lsWire.userInfo = null;

            return lsWire.userInfo;

        },

        getSecurityInfo: function (forceUpdate) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Retrieves from Web.Api application Roles and Permissions
            /// Stored in lsWire.appRoles and lsWire.appPermissions
            /// </summary>
            /// <returns type="object">Object holding application roles and permissions</returns>
            /// </signature>
            /// <signature>
            /// <param name="forceUpdate" type="boolean" optional="true">Force update from the server</param>
            /// <returns type="object">Object holding application roles and permissions</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (lsWire.appRoles == undefined || lsWire.appPermissions == undefined || forceUpdate) {
                $.ajax({
                    async: false,
                    url: "/api/Security/GetAppSecurityObjects",
                    success: function (data) {
                        lsWire.appRoles = data.Roles;
                        lsWire.appPermissions = data.Permissions;
                    },
                    error: function () {
                        lsWire.appRoles = null;
                        lsWire.appPermissions = null;
                    }
                });
            }

            if (lsWire.appRoles === undefined)
                lsWire.appRoles = null;

            if (lsWire.appPermissions === undefined)
                lsWire.appPermissions = null;

            return { appRoles: lsWire.appRoles, appPermissions: lsWire.appPermissions };

        },

        getAppConfig: function (forceUpdate) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Retrieves any application configuration data from Web.Api
            /// Stored in lsWire.appConfig
            /// </summary>
            /// <returns type="object">Object holding application configuration information</returns>
            /// </signature>
            /// <signature>
            /// <param name="forceUpdate" type="boolean" optional="true">Force update from the server</param>
            /// <returns type="object">Object holding application configuration information</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (lsWire.appConfig == undefined || forceUpdate) {
                $.ajax({
                    async: false,
                    url: "/api/file/getAppConfig/",
                    success: function (data) {
                        lsWire.appConfig = data;
                    },
                    error: function () {
                        lsWire.appConfig = {};
                    }
                });
            }

            if (lsWire.appConfig === undefined)
                lsWire.appConfig = {};

            return lsWire.appConfig;

        },

        passwordValidator: function (element, passwordContentItem, confirmContentItem) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initialize an Element for password entry and validation
            /// </summary>
            /// <param name="element" type="HTMLElement" optional="false">Element for the password input</param>
            /// <param name="passwordContentItem" type="object" optional="false">ContentItem of our password field</param>
            /// </signature>
            /// <signature>
            /// <param name="element" type="HTMLElement" optional="false">Element for the password input</param>
            /// <param name="passwordContentItem" type="object" optional="false">ContentItem of our password field</param>
            /// <param name="confirmContentItem" type="object" optional="true">Optional - ContentItem of our confirm password field</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (element == undefined || passwordContentItem == undefiend) return;

            // Lets make sure passwords are not viewable
            lsWire.changeInputToPassword(element);

            // Bind to the value property of our password field, so we can implement validation 
            passwordContentItem.dataBind("value", function (pwdValue) {

                // Go validate the password, returns true/false
                var validated = lsWire.validatePassword(passwordContentItem);

                // If we were passed a confirmPassword field and the password passed validation
                if (confirmContentItem !== undefined && confirmContentItem !== null && validated) {

                    // Force the validation of the confirmPassword field
                    // We've put it here also in case things get out of sequence
                    lsWire.validateConfirmPassword(confirmContentItem, pwdValue);

                }

            });


        },

        confirmPasswordValidator: function (element, confirmContentItem, passwordContentItem) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>Initialize an Element as a password confirmation</summary>
            /// <param name="element" type="HTMLElement" optional="false">Element for the confirm password input</param>
            /// <param name="confirmContentItem" type="object" optional="false">ContentItem of our confirm password field</param>
            /// </signature>
            /// <signature>
            /// <param name="element" type="HTMLElement" optional="false">Element for the confirm password input</param>
            /// <param name="confirmContentItem" type="object" optional="false">ContentItem of our confirm password field</param>
            /// <param name="passwordContentItem" type="object" optional="true">ContentItem of our password field</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (element == undefined || passwordContentItem == undefiend) return;

            // Lets make sure passwords are not viewable
            lsWire.changeInputToPassword(element);

            // Bind to the value property of our confirmPassword field, for our custom validation
            confirmContentItem.dataBind("value", function () {

                // Go run the validation test, we also pass thru the value we are testing against
                lsWire.validateConfirmPassword(confirmContentItem, passwordContentItem.value);

            });

        },

        changeInputToPassword: function (element) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Self explanatory, change the input element to be of a password type
            /// Which will hide the characters, good for any data you want to hide
            /// </summary>
            /// <param name="element" type="HTMLElement" optional="false">DOM Element to convert</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (element == undefined) return;

            $(element).find(".id-element").attr("type", "password");
        },

        validatePassword: function (contentItem) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Validate our password field (contentItem)
            /// If it does not pass, we'll show the native LightSwitch error 
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">contentItem that that we will validate</param>
            /// <returns type="boolean">true/false</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined) return false;

            var valid = true;

            // Make sure any validation errors will be displayed
            contentItem._alwaysShowValidationResults = true;

            // Get our data for the pwd
            var pwdValue = contentItem.value;

            // Does the field have data, if not bypass
            if (pwdValue !== undefined && pwdValue !== null) {

                // Check to see if we have a valid password
                if (!lsWire.isValidPassword(pwdValue)) {

                    // The password is not valid, add a validation exception to the contentItem
                    contentItem.validationResults = [new msls.ValidationResult(contentItem, "Not a valid password!")];
                    valid = false;
                }
                    // else validation passed!  So empty the exception queue
                else if (contentItem.validationResults.length > 0) {
                    contentItem.validationResults = [];
                }
            }
            return valid;
        },

        validateConfirmPassword: function (contentItem, pwdValue) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Validate our confirmPassword field (contentItem)
            /// We really only care if it matches the password, if not, show the error
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">contentItem that we will validate</param>
            /// <param name="pwdValue" type="string" optional="false">Value from the master password input</param>
            /// <returns type="boolean">true/false</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined || pwdValue == undefined) return false;

            var valid = true;

            // Make sure any validation errors will be displayed
            contentItem._alwaysShowValidationResults = true;

            // Get the value to compare with the pwd
            var confirmPwdValue = contentItem.value;

            // Does the field have data
            if (confirmPwdValue !== undefined && confirmPwdValue !== null) {

                // Check to see if the values do not match
                if (confirmPwdValue !== pwdValue) {

                    // Not a match, so display a validation error
                    contentItem.validationResults = [new msls.ValidationResult(contentItem, "Passwords do not match!")];
                    valid = false;
                }
                    // else validation passed!  So empty the exception queue
                else if (contentItem.validationResults.length > 0) {
                    contentItem.validationResults = [];
                }
            }

            return valid;
        },

        isValidPassword: function (pwd) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Simple function to test whether a string fits our password requirements
            /// </summary>
            /// <param name="pwd" type="string" optional="false">Password string to validate</param>
            /// <returns type="boolean">true/false</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (pwd == undefined) return false;

            // Yes... this can be one big ass RegEx... but at the cost of readability
            // So I've purposely broken it up so folks can understand it a bit more

            // Should be alpha numaric with at least one special character.
            if (!(null !== pwd.match(/[@+#$]/))) return false;

            // No spaces allowed
            if (!(null !== pwd.match(/^\S+$/))) return false;

            // Should be minimum 8 chars and max 20 chars.
            if (!(null !== pwd.match(/^.{8,20}$/))) return false;

            // No repeat of a character more than 2 times. 
            if (!(null === pwd.match(/(.)(.*\1){2}/))) return false;

            // ~,'.:;^| are not allowed
            if (!(null !== pwd.match(/^[^~,'.:;^|]+$/))) return false;

            return true;
        },


        // #endregion


        // #region Screen - 22 functions
        // ==========================================================


        getScreenInternalDetails: function (screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Get a handle to the internal details of a screen... lots of functionality here!
            /// </summary>
            /// <returns type="object">Properties that are not normally exposed</returns>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// <returns type="object">Properties that are not normally exposed</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var details = null;

            try {
                if (screen == undefined)
                    screen = lsWire.getActiveScreen();

                if (screen != undefined) {
                    var o = _.find(screen.details.startPage._dependents.isVisible, function (ef) { return !!ef.trackingStub.o["_buttons"]; });
                    if (o != undefined) {
                        details = o.trackingStub.o;
                    }
                }

            } catch (e) {
                return details;
            }

            return details;

        },

        changeScreenHomeButton: function (screen, iconClass, title, callBack) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Change the home button on a screen
            /// </summary>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// <param name="iconClass" type="string" optional="true">Optional - CSS Class for the button</param>
            /// <param name="title" type="string" optional="true">Optional - Title to be used when hovered on</param>
            /// <param name="callBack" type="function" optional="true">Optional - Function/Method to execute on click</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            setTimeout(function () {
                // Make sure we have a screen object
                screen = screen == undefined ? lsWire.getActiveScreen() : screen;

                // Get our back button container
                var selector = "#" + screen.details._pageId + " .titles-bar .msls-back-button-contain";
                var container = document.querySelector(selector);

                if (container == null) return;

                // Update the title if passed
                if (title != undefined)
                    container.getElementsByClassName('subControl')[0].title = title;

                // Update our icon, if passed
                if (iconClass != undefined) {
                    var iconElement = container.querySelector('.msls-home-button .ui-icon');

                    if (iconElement != undefined) {
                        iconElement.classList.remove('ui-icon-msls-home');
                        iconElement.classList.add(iconClass);
                        container.style.paddingRight = '10px';
                    }
                };

                // Change the click functionality to be our own, this time showing the sidebar help
                if (callBack != undefined) {
                    $('.msls-home-button').off('vclick');
                    $(container).off('vclick').on('vclick', callBack);
                }

            }, 0);
        },

        changeScreenButton: function (screen, buttonType, iconClass, title) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Change the properties of a screen button
            /// </summary>
            /// <param name="screen" type="object" optional="true">Screen the button is on</param>
            /// <param name="buttonType" type="string" optional="false">Type of button we are changing: ok, save, discard, cancel</param>
            /// <param name="iconClass" type="string" optional="true">New icon class for the button</param>
            /// <param name="title" type="string" optional="true">What title/tip to use</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            setTimeout(function () {
                if (buttonType == undefined) return;
                buttonType = buttonType.toLowerCase();

                var button = _.find(lsWire.getScreenInternalDetails(screen).parent._subControls, function (s) {
                    return s.content.toLowerCase() == buttonType;
                });

                if (button != undefined) {

                    var view = button.getView();

                    if (view != undefined) {

                        if (title != undefined) view[0].title = title;

                        if (iconClass != undefined) {
                            iconClass = _.contains(iconClass, "ui-icon-") ? iconClass : "ui-icon-" + iconClass;
                            var iconElement = view.find(".ui-icon");
                            if (iconElement != undefined) {

                                var oldIcon = _.find(iconElement[0].classList, function(c) {
                                    return _.contains(c, "ui-icon-msls-");
                                });

                                $(iconElement).removeClass(oldIcon).addClass(iconClass);

                            };

                        }

                    }


                }

            }, 0);

        },

        addScreenHomeButton: function (screen, iconClass, title, callBack) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Add a home button to screens that don't already have one
            /// </summary>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// <param name="iconClass" type="string" optional="true">Optional - CSS Class for the button</param>
            /// <param name="title" type="string" optional="true">Optional - Title to be used when hovered on</param>
            /// <param name="callBack" type="function" optional="true">Optional - Function/Method to execute on click</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            // See if we already have the container/button
            var selector = "#" + screen.details._pageId + " .titles-bar .msls-back-button-contain";
            var container = document.querySelector(selector);

            // If we do have it... return
            if (container != null) return;

            // Create our elements, yes I know there are faster/optimized way of doing this.
            // But for folks learning and for readable, this is better for now
            var mostInnerUiBtnText = $('<span class="ui-btn-text">Home</span>');
            var mostInnerUiBtnInner = $('<span class="ui-btn-inner"></span>');
            var idElement = $('<a class="id-element ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini" data-role="button" data-theme="a" data-mini="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperEls="span"></a>');
            var outerUiBtnText = $('<span class="ui-btn-text"></span>');
            var uiIcon = $('<span class="ui-icon"></span>');
            var outerUiBtnInner = $('<span class="ui-btn-inner" style="padding-right: 10px;"></span>');
            var subControl = $('<div tabindex="0" title="" class="subControl msls-home-button msls-large-icon msls-tap ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-notext" data-role="button" data-theme="a" data-ls-tap="tap:{data.shell.homeCommand.command}" data-ls-isenabled="isEnabled:{tap.canExecute}" data-ls-content="content:{data.shell.homeCommand.displayName}" data-iconpos="notext" data-icon="msls-home" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperEls="span"></div>');
            var outerDiv = $('<div class="msls-back-button-contain"></div>');

            // What icon and title shall we use for the button
            iconClass = iconClass == undefined ? "ui-icon-msls-home" : iconClass;
            title = title == undefined ? "Home" : title;

            $(uiIcon).addClass(iconClass).addClass("ui-icon-shadow");
            $(subControl).attr("title", title);

            // Now lets add all the elements together
            mostInnerUiBtnInner.append(mostInnerUiBtnText);
            idElement.append(mostInnerUiBtnInner);
            outerUiBtnText.append(idElement);
            outerUiBtnInner.append(outerUiBtnText);
            outerUiBtnInner.append(uiIcon);
            subControl.append(outerUiBtnInner);
            outerDiv.append(subControl);

            // Add the button to the title bar
            $("#" + screen.details._pageId + " .titles-bar").prepend($(outerDiv));

            // If no callback was sent, create the default
            if (callBack == undefined)
                callBack = function (e) {
                    if (e != undefined && e["preventDefault"] != undefined) {
                        e.preventDefault();
                        e.stopPropagation();
                    }

                    lsWire.getShell().finishNavigation().then(function () {
                        lsWire.getShell().navigateHome();
                    });
                };

            // Add the callback to the button click
            $(outerDiv).on('vclick', callBack);

        },

        addTabBarButton: function (screen, iconClass, title, callBack) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Add a button into the tab bar for screens that don't normally have it
            /// </summary>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// <param name="iconClass" type="string" optional="true">Optional - CSS Class for the button</param>
            /// <param name="title" type="string" optional="true">Optional - Title to be used when hovered on</param>
            /// <param name="callBack" type="function" optional="true">Optional - Function/Method to execute on click</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            // See if we already have the container/button
            var selector = "#" + screen.details._pageId + " .msls-tabs-bar .msls-back-button-contain";
            var container = document.querySelector(selector);

            // If we do have it... return
            if (container != null) return;

            // Create our elements, yes I know there are faster/optimized way of doing this.
            // But for folks learning and for readable, this is better for now
            var mostInnerUiBtnText = $('<span class="ui-btn-text">Home</span>');
            var mostInnerUiBtnInner = $('<span class="ui-btn-inner"></span>');
            var idElement = $('<a class="id-element ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini" data-role="button" data-theme="a" data-mini="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperEls="span"></a>');
            var outerUiBtnText = $('<span class="ui-btn-text"></span>');
            var uiIcon = $('<span class="ui-icon"></span>');
            var outerUiBtnInner = $('<span class="ui-btn-inner" style="padding-right: 10px;"></span>');
            var subControl = $('<div tabindex="0" title="" class="subControl msls-home-button msls-large-icon msls-tap ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-notext" data-role="button" data-theme="a" data-ls-tap="tap:{data.shell.homeCommand.command}" data-ls-isenabled="isEnabled:{tap.canExecute}" data-ls-content="content:{data.shell.homeCommand.displayName}" data-iconpos="notext" data-icon="msls-home" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperEls="span"></div>');
            var outerDiv = $('<div class="msls-back-button-contain"></div>');

            // What icon and title shall we use for the button
            iconClass = iconClass == undefined ? "ui-icon-msls-home" : iconClass;
            title = title == undefined ? "Home" : title;

            $(uiIcon).addClass(iconClass).addClass("ui-icon-shadow");
            $(subControl).attr("title", title);

            // Now lets add all the elements together
            mostInnerUiBtnInner.append(mostInnerUiBtnText);
            idElement.append(mostInnerUiBtnInner);
            outerUiBtnText.append(idElement);
            outerUiBtnInner.append(outerUiBtnText);
            outerUiBtnInner.append(uiIcon);
            subControl.append(outerUiBtnInner);
            outerDiv.append(subControl);

            // Add the button to the tab bar
            $("#" + screen.details._pageId + " .msls-tabs-bar").prepend($(outerDiv));

            // If no callback was sent, create the default
            if (callBack == undefined)
                callBack = function (e) {

                    if (e != undefined && e["preventDefault"] != undefined) {
                        e.preventDefault();
                        e.stopPropagation();
                    }

                    lsWire.getShell().finishNavigation().then(function () {
                        lsWire.getShell().navigateHome();
                    });
                };

            // Add the callback to the button click
            $(outerDiv).on('vclick', callBack);
            $(outerDiv).css("float", "left");
            $(outerDiv).css("padding-top", "5px");


        },

        hideScreenTitleBar: function (screen, hide) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Hide the title bar of the screen
            /// </summary>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// <param name="hide" type="boolean" optional="true">Defaults to true, pass a false to display (unhide)</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            screen = screen == undefined ? lsWire.getActiveScreen() : screen;
            hide = hide == undefined ? true : hide;

            if (screen.details._rootContentItem.kind != "Screen") return;

            // Get all the title for this screen
            var screenTitleBar = document.getElementById(screen.details._pageId).getElementsByClassName("titles-bar")[0];

            if (screenTitleBar != undefined) {
                if (hide) {
                    screenTitleBar.classList.add("msls-collapsed");
                } else {
                    screenTitleBar.classList.remove("msls-collapsed");
                }
            }

        },

        showDeleteDialogBox: function (saveType, entity, msg, title, callBack) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// High level function to prompt if its ok to delete the passed entity
            /// </summary>
            /// <param name="saveType" type="string" optional="true">Optional - Type of save, commit or apply, defaults to commit</param>
            /// <param name="entity" type="object" optional="false">Entity of what to delete</param>
            /// </signature>
            /// <signature>
            /// <param name="saveType" type="string" optional="true">Optional - Type of save, commit or apply, defaults to commit</param>
            /// <param name="entity" type="object" optional="false">Entity of what to delete</param>
            /// <param name="msg" type="string" optional="true">Optional - Message to display</param>
            /// </signature>
            /// <signature>
            /// <param name="saveType" type="string" optional="true">Optional - Type of save, commit or apply, defaults to commit</param>
            /// <param name="entity" type="object" optional="false">Entity of what to delete</param>
            /// <param name="msg" type="string" optional="true">Optional - Message to display</param>
            /// <param name="title" type="string" optional="true">Optional - Title on the popup</param>
            /// </signature>
            /// <signature>
            /// <param name="saveType" type="string" optional="true">Optional - Type of save, commit or apply, defaults to commit</param>
            /// <param name="entity" type="object" optional="false">Entity of what to delete</param>
            /// <param name="msg" type="string" optional="true">Optional - Message to display</param>
            /// <param name="title" type="string" optional="true">Optional - Title on the popup</param>
            /// <param name="callBack" type="object" optional="true">Optional - Your custom method vs standard entity.deleteEntity</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            title = title != undefined ? title : "Delete?";
            msg = msg != undefined ? msg : "";
            saveType = saveType != undefined ? saveType : "commit";

            if (entity != undefined) {

                msls.showMessageBox(msg, {
                    title: title,
                    buttons: msls.MessageBoxButtons.yesNo
                }).then(function (closeAction) {

                    if (closeAction === msls.MessageBoxResult.yes) {

                        if (callBack != undefined)
                            callBack(entity);
                        else {
                            entity.deleteEntity();

                            if (saveType.toLowerCase() === "apply")
                                myapp.applyChanges();
                            else
                                myapp.commitChanges();
                        }
                    }

                });
            }

        },

        showDiscardDialogBox: function (screen, title, text, yesCallBack, noCallBack) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// High level wrapper to ask the user permission to discard any changes, no parameters, global
            /// </summary>
            /// <returns type="boolean">True/False depending on user input</returns>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Optional - Screen to look for changes, else all will be looked at</param>
            /// <returns type="boolean">True/False depending on user input</returns>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Optional - Screen to look for changes, else all will be looked at</param>
            /// <param name="title" type="string" optional="true">Optional - Title for the popup</param>
            /// <returns type="boolean">True/False depending on user input</returns>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Optional - Screen to look for changes, else all will be looked at</param>
            /// <param name="title" type="string" optional="true">Optional - Title for the popup</param>
            /// <param name="text" type="string" optional="true">Optional - Additional message to display</param>
            /// <returns type="boolean">True/False depending on user input</returns>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Optional - Screen to look for changes, else all will be looked at</param>
            /// <param name="title" type="string" optional="true">Optional - Title for the popup</param>
            /// <param name="text" type="string" optional="true">Optional - Additional message to display</param>
            /// <param name="yesCallBack" type="function" optional="true">Optional - Function to run on a yes selection</param>
            /// <returns type="boolean">True/False depending on user input</returns>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Optional - Screen to look for changes, else all will be looked at</param>
            /// <param name="title" type="string" optional="true">Optional - Title for the popup</param>
            /// <param name="text" type="string" optional="true">Optional - Additional message to display</param>
            /// <param name="yesCallBack" type="function" optional="true">Optional - Function to run on a yes selection</param>
            /// <param name="noCallBack" type="function" optional="true">Optional - Function to run on a no selection</param>
            /// <returns type="boolean">True/False depending on user input</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Do we have any changes, either local or wide area
            var thereAreChanges = !!screen
				? lsWire.shell.anyNavigationUnitHasChanges()
				: lsWire.screenHasChanges();


            title = !!title ? title : "Discard your Changes?";
            text = !!text ? text : "";

            // If there are any changes, even nested, ask if its ok to discard/cancel 
            if (thereAreChanges) {

                // Make sure we return the promise from the showMessageBox to stop processing
                return msls.showMessageBox(text, {
                    title: title,
                    buttons: msls.MessageBoxButtons.yesNo
                }).then(function (result) {

                    if (result == msls.MessageBoxResult.yes) {
                        result = true;
                        if (yesCallBack != undefined) {
                            yesCallBack();
                        }
                    } else {
                        result = false;
                        if (noCallBack != undefined) {
                            noCallBack();
                        }
                    }

                    return result;
                });
            } else {

                // If no changes to the screen data, its ok to discard/cancel
                if (yesCallBack != undefined) {
                    yesCallBack();
                };

                return true;
            }

        },

        showPopup: function (name, top, left, className, screen, callBack) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Show a screen popup with custom top/left and a CSS class if passed
            /// </summary>
            /// <param name="name" type="string">Name of the popup</param>
            /// </signature>
            /// <signature>
            /// <param name="name" type="string">Name of the popup</param>
            /// <param name="top" type="string" optional="true">Optional - Top pixel location for your popup, ie: "10px", can also pass "centered"</param>
            /// </signature>
            /// <signature>
            /// <param name="name" type="string">Name of the popup</param>
            /// <param name="top" type="string" optional="true">Optional - Top pixel location for your popup, ie: "10px", can also pass "centered"</param>
            /// <param name="left" type="string" optional="true">Optional - Left pixel location for your popup, ie: "20px", can also pass "centered"</param>
            /// </signature>
            /// <signature>
            /// <param name="name" type="string">Name of the popup</param>
            /// <param name="top" type="string" optional="true">Optional - Top pixel location for your popup, ie: "10px", can also pass "centered"</param>
            /// <param name="left" type="string" optional="true">Optional - Left pixel location for your popup, ie: "20px", can also pass "centered"</param>
            /// <param name="className" type="string" optional="true">Optional - CSS Class for the popup</param>
            /// </signature>
            /// <signature>
            /// <param name="name" type="string">Name of the popup</param>
            /// <param name="top" type="string" optional="true">Optional - Top pixel location for your popup, ie: "10px", can also pass "centered"</param>
            /// <param name="left" type="string" optional="true">Optional - Left pixel location for your popup, ie: "20px", can also pass "centered"</param>
            /// <param name="className" type="string" optional="true">Optional - CSS Class for the popup</param>
            /// <param name="screen" type="object" optional="true">Optional - Screen object, if not passed, active screen will be used</param>
            /// </signature>
            /// <signature>
            /// <param name="name" type="string">Name of the popup</param>
            /// <param name="top" type="string" optional="true">Optional - Top pixel location for your popup, ie: "10px", can also pass "centered"</param>
            /// <param name="left" type="string" optional="true">Optional - Left pixel location for your popup, ie: "20px", can also pass "centered"</param>
            /// <param name="className" type="string" optional="true">Optional - CSS Class for the popup</param>
            /// <param name="screen" type="object" optional="true">Optional - Screen object, if not passed, active screen will be used</param>
            /// <param name="callBack" type="fuction" optional="true">Optional - Callback to execute after the popup is displayec</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            if (screen.findContentItem(name) != undefined && !lsWire.getShell().navigationInProgress) {;

                // Call the LightSwitch showPop, then lets customize its style and location
                screen.showPopup(name).then(function () {

                    // Get the popup container, active one
                    var container = document.getElementsByClassName('ui-popup-active')[0];

                    // Now change the styles as necessary
                    if (top != undefined) {

                        if (isNaN(top)) {
                            if (top == "centered") {
                                top = (window.innerHeight / 2) - (container.offsetHeight / 2);
                            }
                        }

                        container.style.top = _.contains(top, "px") ? top : top + "px";

                    }

                    if (left != undefined) {

                        if (isNaN(left)) {
                            if (left == "centered") {
                                left = (window.innerWidth / 2) - (container.offsetWidth / 2);
                            }
                        }

                        container.style.left = _.contains(left, "px") ? left : left + "px";

                    }

                    if (className != undefined)
                        container.classList.add(className);

                    if (callBack != undefined)
                        callBack(container);

                });
            }
        },

        renderMultiLineTabHeaders: function (screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Render the top tab headers into multi-line, allowing for longer titles in a small column width
            /// </summary>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            if (screen.details._rootContentItem.kind != "Screen") return;

            // Get all the pages
            var pages = screen.details.pages;

            // Get all the tabs for this screen
            var selector = "#" + screen.details._pageId + " .msls-screen-tab";
            var tabs = document.querySelectorAll(selector);

            //var tabs = document.getElementById(lsWire.screen.active().details._pageId).getElementsByClassName('msls-screen-tab');

            // Loop over all the pages
            _.forEach(pages, function (page) {

                // If there is a break tag in the display name... lets render it
                if (page.displayName.indexOf("<br") !== -1) {

                    // Get the html element
                    var htmlElement = _.find(tabs, function (tab) {
                        return $(tab).data().mslsTabName == page.name;
                    });

                    var tabHeader1 = htmlElement.getElementsByClassName("id-element");
                    var spanElement = document.createElement("span");
                    spanElement.innerHTML = page.displayName;
                    tabHeader1[0].textContent = null;
                    tabHeader1[0].appendChild(spanElement);

                }
            });
        },

        disableAllControls: function (parentElement) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Disable all child HTML controls from the passed parent
            /// </summary>
            /// <param name="parentElement" type="HTMLElement">DOM Element to start looking for children to disable </param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (parentElement == undefined) return;

            setTimeout(function () {
                $(parentElement).find('a').off('vclick');
                $(parentElement).find('input').attr('disabled', 'true');
                $(parentElement).find('textarea').attr('disabled', 'true');
                $(parentElement).find('select').attr('disabled', 'true');
            }, 0);
        },

        getPage: function (pageName, screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Get the screen page (tab) for the passed name
            /// </summary>
            /// <param name="pageName" type="string" optional="false">Name of the page (tab)</param>
            /// <returns type="object">Page object</returns>
            /// </signature>
            /// <signature>
            /// <param name="pageName" type="string" optional="false">Name of the page (tab)</param>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// <returns type="object">Page object</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (pageName == undefined) return null;

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            var result = null;

            if (screen == undefined)
                return null;

            var screenPages = screen.details.pages;

            for (var i = 0; i < screenPages.length; i++) {

                // If a match, return the tab, else continue
                if (screenPages[i].name === pageName) {
                    result = screenPages[i];
                    break;
                }
            }

            return result;

        },

        hideScreenButtons: function (screen, hide) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>Hide the screen buttons that are on the top right, typically the save/discard/cancel/logout buttons</summary>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// <param name="hide" type="boolean" optional="true">Defaults to true, pass a false to display (unhide)</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;
            hide = hide == undefined ? true : hide;

            var selector = "#" + screen.details._pageId + " .titles-bar";

            if (hide) {
                document.querySelector(selector).getElementsByClassName('msls-screen-buttons')[0].style.display = "none";
            } else {
                document.querySelector(selector).getElementsByClassName('msls-screen-buttons')[0].style.display = "inline";
            }
        },

        screenHasValidationErrors: function (screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Does the screen have any validation errors
            /// </summary>
            /// <returns type="boolean">true if screen has validation errors, else false</returns>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// <returns type="boolean">true if screen has validation errors, else false</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            var validationErrors = false;

            _.each(screen.details.pages, function (page) {

                if (!validationErrors) {
                    validationErrors = _.any(page.children, function (child) {
                        return child.hasValidationErrors(true);
                    });
                }

            });


            return validationErrors;

        },

        screenHasChanges: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Does the active screen have any changes to its data
            /// </summary>
            /// <returns type="boolean">true if screen has changes, else false</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var navUnit = lsWire.getShell().activeNavigationUnit;

            return navUnit.hasChanges
				|| navUnit.nestedChangeSet != undefined && navUnit.nestedChangeSet.hasNestedChanges;

        },

        clearScreenValidationErrors: function (screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Clear all validation errors from the screeen.  Allows for saving with errors on the client.
            /// </summary>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            var contentItemTypes = [];
            contentItemTypes.push(msls.ContentItemKind.details);
            contentItemTypes.push(msls.ContentItemKind.value);
            contentItemTypes.push(msls.ContentItemKind.collection);

            // Find these content items starting from the children of the 'columns' content item 
            var matchingContentItems = findMatchingContentItems(contentItemTypes, screen.details.rootContentItem);

            var validationErrors = _.filter(matchingContentItems, function (item) {
                return item.validationResults.length > 0;
            });

            _.forEach(validationErrors, function (item) {
                item.validationResults = [];
            });


            function findMatchingContentItems(arrayOfTypes, parentContentItem) {
                var matches = [];

                if (parentContentItem.children.length == 0) {
                    return matches;
                }
                $.each(parentContentItem.children, function (i, contentItem) {
                    $.each(arrayOfTypes, function (j, type) {
                        if (contentItem.kind == type) {
                            matches.push(contentItem);
                        }
                    });
                    // Check the child's children for matches 
                    matches = matches.concat(findMatchingContentItems(arrayOfTypes, contentItem));
                });
                return matches;
            };
        },

        getActiveScreen: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Get the active screen object, works from anywhere.
            /// </summary>
            /// <returns type="object">Screen object</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var shell = lsWire.getShell();
            var result = null;

            if (shell != undefined)
                result = shell.activeNavigationUnit.screen;

            return result;

        },

        allowScreenTitleToWrap: function (screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Allows the title of the screen to wrap as the browser narrows
            /// </summary>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Screen that will hold the titles</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            if (screen.details._rootContentItem.kind != "Screen") return;

            // Get all the title for this screen
            var selector = "#" + screen.details._pageId + " h1.msls-title .msls-text";
            var screenTitle = document.querySelector(selector);

            if (screenTitle != undefined) {
                screenTitle.classList.add("lswire-text-allowwrap");
            }

        },

        changeScreenTitle: function (screen, title, subTitle, subTitleLocation, subTitleCssClass) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Change the title of the passed screen.  Allowing for an additional subtitle.
            /// </summary>
            /// <param name="screen" type="object" optional="true">Optional - Screen that houses the title we are about to change</param>
            /// <param name="title" type="string" optional="false">What the main title will be</param>
            /// <param name="subTitle" type="string" optional="true">Optional - What the subtitle will be</param>
            /// <param name="subTitleLocation" type="string" optional="true">Optional - Options can be above or below the main title</param>
            /// <param name="subTitleCssClass" type="string" optional="true">Optional - What CSS Class to give to the subtitle, defaults to lswire-screen-subtitle</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var newSubTitle;

            // Create the css class for the container object
            var containerCssClass = "lswire-title-container";

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            if (screen.details._rootContentItem.kind != "Screen") return;

            // Get the pageId
            var pageId = "#" + screen.details._pageId;

            var selector = "#" + screen.details._pageId + " h1.msls-title .msls-text .id-element";
            var screenTitle = $(selector);

            $(screenTitle).text(title);

            // If there is a subTitle
            if (subTitle != undefined) {

                // Find a location to put the subtitle
                subTitleLocation = subTitleLocation == undefined
					? "above"
					: _.contains("above below", subTitleLocation.toLowerCase()) ? subTitleLocation.toLowerCase() : "above";

                // Create the css class
                subTitleCssClass = subTitleCssClass == undefined
					? "lswire-screen-subtitle"
					: subTitleCssClass;


                // Add the container css class to give better accomadation for 2 lines
                $(pageId + " h1.msls-title").addClass(containerCssClass);

                // First lets see if we already have our tags
                var subTitleElement = $(pageId + " ." + subTitleCssClass);

                if (subTitleElement.length > 0) {
                    if (subTitleLocation == "above") {
                        $(subTitleElement).text(subTitle).append("<br>");
                    } else {
                        $(subTitleElement).text(subTitle).prepend("<br>");
                    }
                } else {

                    // Create our new tag for the subTitle
                    newSubTitle = $("<span></span").addClass(subTitleCssClass).text(subTitle);

                    // Append/prepend to the title
                    if (subTitleLocation == "above") {
                        $(newSubTitle.append("<br>"));
                        $(screenTitle).addClass("lswire-screen-title").parent().prepend(newSubTitle);
                    } else {
                        $(newSubTitle).prepend("<br>");
                        $(screenTitle).addClass("lswire-screen-title").parent().append(newSubTitle);

                    }
                }

                if (subTitleLocation == "above") {
                    $(".msls-navmenu-button", pageId).css("top", "30px");
                    $(".msls-back-button-contain", pageId).addClass("lswire-two-titles-button");
                }
            } else {
                $(".msls-back-button-contain", pageId).removeClass("lswire-two-titles-button");
                $(".lswire-screen-subtitle", pageId).html("");
            }

        },

        disableScreenPropertyBinding: function (screen, propertyName, disable) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Disable a binding on a particular property
            /// </summary>
            /// <param name="screen" type="object" optional="false">Screen object</param>
            /// <param name="propertyName" type="string" optional="false">Name of the property to disable binding</param>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="false">Screen object</param>
            /// <param name="propertyName" type="string" optional="false">Name of the property to disable binding</param>
            /// <param name="disable" type="boolean" optional="true">true to disable/false to enable</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // we have to have a screen and propertyName
            if (!!screen && !!propertyName) {

                // Get our page from the shellview, this holds our pre display items
                var shellViewPage = lsWire.shell.shellView._pageIdMapping[screen.details._pageId];

                if (!!shellViewPage) {

                    // Now get the unit
                    var unit = shellViewPage.unit;

                    if (!!unit) {

                        // Now look for our binding
                        var binding = _.find(unit.task.__dependencies, function (e) {
                            return e.bindingPath == propertyName;
                        });

                        // If we found one, what will we do with it
                        if (!!!disable) {
                            binding.deactivate();
                        } else {
                            binding.activate();
                        };

                    };

                };
            }
        },

        activateScreenHeaderDock: function (screen) {

        	// *****************************************************************************************************
        	// *****************************************************************************************************
        	/// <summary>
        	/// Activate the ability of a screens title area (header) to remain fixed allowing for content
        	/// to scroll under while remaining stable
        	/// </summary>
        	/// <param name="screen">Screen that you want the header to remain fixed</param>
        	// *****************************************************************************************************
        	// *****************************************************************************************************


        	// Make sure we have an object created on this content Item
        	screen.lsWire = screen.lsWire || {};
        	var lsw = screen.lsWire;

        	lsw.pageId = "#" + screen.details._pageId;
        	lsw.fixedElement = $(".msls-header-area", lsw.pageId)[0];
        	lsw.scrollingElement = $(".msls-content", lsw.pageId)[0];

        	// Setup an object for tracking
        	lsw.fixed = false;

        	// Obviously we won't do anything unless we actually found the table
        	if (lsw.scrollingElement != undefined) {

        		// So we can track position, get the original 
        		// top and bottom positon for the table
        		lsw.bottom = lsw.fixedElement.getBoundingClientRect().bottom;
        		lsw.scrollingItemTop = lsw.scrollingElement.getBoundingClientRect().top;

        		lsw[lsw.pageId + "_catchScroll"] = function (e) {

        			// Get the current location of our scrolling item
        			var currentScrollingItemTop = lsw.scrollingElement.getBoundingClientRect().top;

        			// If the item is not already fixed and the scrolling item is underneath it
        			if (lsw.fixed == false && currentScrollingItemTop <= lsw.bottom) {

        				// Add our fixed element class item to the non scrolling item
        				$(lsw.fixedElement).addClass("lswire-fixed-element");

        				// Set our flag saying we are in fixed mode
        				lsw.fixed = true;

        			} else if (currentScrollingItemTop >= 0 && lsw.fixed == true) {

        				// So the scrolling item top is now within the window
        				// Remove our fixed element class
        				$(lsw.fixedElement).removeClass("lswire-fixed-element");

        				// Change our flag
        				lsw.fixed = false;
        			}

        		};

        		// Meat of our function monitor the scroll event
        		$(document).on("scroll", lsw[lsw.pageId + "_catchScroll"]);

        	};

        },

        disposeScreenHeaderDock: function (screen) {

        	// *****************************************************************************************************
        	// *****************************************************************************************************
        	/// <summary>
        	/// Dispose of the particular screens scrolling handler
        	/// </summary>
        	/// <param name="screen" type="object" optional="false">Screen that the header is fixed</param>
        	// *****************************************************************************************************
        	// *****************************************************************************************************


        	var lsw = screen.lsWire;

        	// If the contentItem still has the scroll method, turn it off
        	if (lsw && lsw[lsw.pageId + "_catchScroll"] != undefined) {
        		$(document).off("scroll", lsw[lsw.pageId + "_catchScroll"]);
        		lsw[lsw.pageId + "_catchScroll"] = null;
        	}

        },

        // #endregion 


        // #region Screen Navigation - 6 functions
        // ==========================================================


        replaceScreenNav: function (items) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Relace a screen navigation menu with a custom one
            /// </summary>
            /// <param name="items" type="array" optional="false">Array of objects {displayName: string, callBack: function}</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (items == undefined) return;

            // First clear out the existing nav menu
            lsWire.clearScreenNav();

            // Now append the new items
            lsWire.appendToScreenNav(items);

        },

        appendToScreenNav: function (items) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Append an existing screen navigation menu with a custom items
            /// </summary>
            /// <param name="items" type="array" optional="false">Array of objects {displayName: string, callBack: function}</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (items == undefined) return;

            _.forEach(items, function (item) {
                lsWire.insertIntoScreenNav(item.displayName, item.callBack);
            });
        },

        clearScreenNav: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Clear/delete any existing screen navigation menu items
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var shell = lsWire.getShell();

            if (shell != undefined) {

                // Do we have a nav menu defined
                if (shell.hasNavigationMenu()) {

                    // Make sure we have a navigation menu
                    if (shell._navigationMenu === undefined)
                        shell.getNavigationMenu();

                    // Shortcut to the items
                    var navMenu = shell._navigationMenu.items;

                    // Pop all the items from the array
                    while (navMenu.length > 0) {
                        navMenu.pop();
                    }
                }
            }
        },

        disableScreenNav: function (screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Disable the screen navigation menu.  
            /// If you pass a screen object scope will be limited to that screen.  
            /// If not, it will disable the navigation menu on all currently rendered screens.
            /// </summary>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Screen object</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var pageId = screen == undefined ? "" : "#" + screen.details._pageId + " ";
            var titleSelector = pageId + ".subControl.ui-title.msls-title .msls-text.msls-btn-title";
            var arrowSelector = pageId + ".subControl.ui-title.msls-title .msls-navmenu-button";

            var titles = document.querySelectorAll(titleSelector);
            var arrows = document.querySelectorAll(arrowSelector);

            // Over each one, add the collapsed class
            _.forEach(arrows, function (arrow) {
                arrow.classList.add("msls-collapsed");
            });

            _.forEach(titles, function (title) {
                $(title).off("vclick").removeClass("msls-btn-title");
            });


        },

        insertIntoScreenNav: function (displayName, callBack, index) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Insert a screen navigation item at a specific location in the list
            /// </summary>
            /// <param name="displayName" type="string" optional="false">Name to display</param>
            /// <param name="callBack" type="function" optional="false">function try execute</param>
            /// </signature>
            /// <signature>
            /// <param name="displayName" type="string" optional="false">Name to display</param>
            /// <param name="callBack" type="function" optional="false">function try execute</param>
            /// <param name="index" type="number" optional="true">Where in the menu to insert item, defaults to the last item</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // If no shell... return
            var shell = lsWire.getShell();

            if (displayName != undefined && callBack != undefined && shell != undefined && shell.hasNavigationMenu()) {

                // Make sure the nav menu has been initialized first
                if (shell._navigationMenu === undefined)
                    shell.getNavigationMenu();

                // Create a blank object
                var navItem = new Object();
                navItem._displayName = displayName;
                navItem.displayName = displayName;
                navItem._command = callBack;
                navItem.execute = function () { this._command(); };

                // if no location then make it a push vs splice
                if (index === undefined) {

                    // Add to the nav menu
                    shell._navigationMenu.items.push(navItem);

                } else {

                    // Insert into the nav menu
                    shell._navigationMenu.items.splice(index, 0, navItem);

                }
            }

        },

        removeScreenNavItem: function (displayName) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Remove a screen navigation item
            /// </summary>
            /// <param name="displayName" type="string" optional="false">Display name of item to remove</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // If no shell... return
            var shell = lsWire.getShell();

            if (displayName != undefined && shell != undefined && shell.hasNavigationMenu()) {

                // Make sure the nav menu has been initialized first
                if (shell._navigationMenu === undefined)
                    shell.getNavigationMenu();

                // Shortcut to the items
                var navMenu = shell._navigationMenu.items;

                _.remove(navMenu, function (navItem) {
                    return navItem._displayName == displayName;
                });
            }
        },

        // #endregion Screen Navigation Functions/Methods


        // #region Tab - 19 functions 
        // ==========================================================


        showTab: function (name, beforeShown, afterShown, screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Wrapper for showing a tab with options for before and after being shown
            /// </summary>
            /// <param name="name" type="string" optional="false">Name of the tab</param>
            /// </signature>
            /// <signature>
            /// <param name="name" type="string" optional="false">Name of the tab</param>
            /// <param name="beforeShown" type="function" optional="true">Optional - Function to execute before the tab is shown</param>
            /// </signature>
            /// <signature>
            /// <param name="name" type="string" optional="false">Name of the tab</param>
            /// <param name="beforeShown" type="function" optional="true">Optional - Function to execute before the tab is shown</param>
            /// <param name="afterShown" type="function" optional="true">Optional - Function to execute after the tab is shown</param>
            /// </signature>
            /// <signature>
            /// <param name="name" type="string" optional="false">Name of the tab</param>
            /// <param name="beforeShown" type="function" optional="true">Optional - Function to execute before the tab is shown</param>
            /// <param name="afterShown" type="function" optional="true">Optional - Function to execute after the tab is shown</param>
            /// <param name="screen" type="object" optional="true">Optional - Screen object, if not passed, active screen will be used</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (name == undefined) return;

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            // Wait for any navigation to finish
            lsWire.getShell().finishNavigation().then(function () {

                if (beforeShown == undefined && afterShown == undefined) {
                    screen.showTab(name);
                    return;
                }

                if (beforeShown == undefined && afterShown != undefined) {
                    screen.showTab(name).then(function () { afterShown(name); });
                    return;
                }

                if (beforeShown != undefined && afterShown == undefined) {
                    screen.showTab(name, { beforeShown: beforeShown(name) });
                    return;
                }

                if (beforeShown != undefined && afterShown != undefined)
                    screen.showTab(name, { beforeShown: beforeShown(name) }).then(function () { afterShown(name); });

            });

        },

        getActiveTabName: function (screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Get the name of the active tab for a screen
            /// </summary>
            /// <returns type="string">Name of the active tab</returns>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// <returns type="string">Name of the active tab</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            return lsWire.getScreenInternalDetails(screen).activeTab;
        },

        hideTab: function (tabName, hide, screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Hide a tab for a screen
            /// </summary>
            /// <param name="tabName" type="string" optional="false">Name of the tab</param>
            /// </signature>
            /// <signature>
            /// <param name="tabName" type="string" optional="false">Name of the tab</param>
            /// <param name="hide" type="boolean" optional="true">True to hide (default) or False to unhide (show)</param>
            /// </signature>
            /// <signature>
            /// <param name="tabName" type="string" optional="false">Name of the tab</param>
            /// <param name="hide" type="boolean" optional="true">True to hide (default) or False to unhide (show)</param>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (tabName == undefined) return;

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            var tab = screen.findContentItem(tabName);

            if (tab != undefined)
                tab.isVisible = !!!hide;

            return;

        },

        getTabButtons: function (screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Get all the tab Buttons for a screen
            /// </summary>
            /// <returns type="array">Array of tab button objects</returns>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// <returns type="array">Array of tab button objects</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            var result = {};

            var tabHeaderButtons = lsWire.getScreenInternalDetails(screen)._buttons;

            for (var i = 0; i < tabHeaderButtons.length; i++) {
                result[tabHeaderButtons[i].data.name] = tabHeaderButtons[i];
            }

            return result;

        },

        addTabButtonClass: function (tabName, className, screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Add a css class to a tab button
            /// </summary>
            /// <param name="tabName" type="string" optional="false">Tab name</param>
            /// <param name="className" type="string" optional="false">Class name to add</param>
            /// </signature>
            /// <signature>
            /// <param name="tabName" type="string" optional="false">Tab name</param>
            /// <param name="className" type="string" optional="false">Class name to add</param>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (tabName == undefined) return;

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            var tabHeaderElement = lsWire.getTabButtonElement(tabName, screen);

            if (!tabHeaderElement.hasClass(className)) {
                tabHeaderElement.addClass(className);
            }

        },

        removeTabButtonClass: function (tabName, className, screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Remove a css class from a tab button
            /// </summary>
            /// <param name="tabName" type="string" optional="false">Tab name</param>
            /// <param name="className" type="string" optional="false">Class name to remove</param>
            /// </signature>
            /// <signature>
            /// <param name="tabName" type="string" optional="false">Tab name</param>
            /// <param name="className" type="string" optional="false">Class name to remove</param>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (tabName == undefined || className == undefined) return;

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            var tabHeaderElement = lsWire.getTabButtonElement(tabName, screen);

            if (tabHeaderElement.hasClass(className)) {
                tabHeaderElement.removeClass(className);
            }

        },

        getTabButtonElement: function (tabName, screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Get an individual tab Button object 
            /// </summary>
            /// <param name="tabName" type="string" optional="false">Tab name</param>
            /// <returns type="HTMLElement">DOM Element for the tab button</returns>
            /// </signature>
            /// <signature>
            /// <param name="tabName" type="string" optional="false">Tab name</param>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// <returns type="HTMLElement">DOM Element for the tab button</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (tabName == undefined) return null;

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            var tabHeaderButtons = lsWire.getTabButtons(screen);

            var element = $(tabHeaderButtons[tabName]._element);
            var text = element.find('.ui-btn-text');

            return text.length != 0 ? text : element;

        },

        tabHasValidationErrors: function (tabName, screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Check to see if the tab has any validation errors
            /// </summary>
            /// <param name="tabName" type="string" optional="false">Name of the tab to check</param>
            /// <returns type="boolean">true/false</returns>
            /// </signature>
            /// <signature>
            /// <param name="tabName" type="string" optional="false">Name of the tab to check</param>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// <returns type="boolean">true/false</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (tabName == undefined) return false;

            var validationErrors = false;
            var thisTab;

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            var tabs = _.find(screen.details.rootContentItem.children, function (child) { return child.displayName == "Tabs"; });

            if (tabs != undefined) {

                thisTab = _.find(tabs.children, function (child) { return child.name == tabName; });

                validationErrors = thisTab.hasValidationErrors(true);

            }

            if (thisTab != undefined && validationErrors && thisTab._view != undefined)
                validationErrors = thisTab.validationResults.length > 0;

            return validationErrors;

        },

        getTabs: function (screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Get all the tab objects for a particular screen
            /// </summary>
            /// <returns type="array">Array of tab objects</returns>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// <returns type="array">Array of tab objects</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            return lsWire.getScreenInternalDetails(screen).children;

        },

        getActiveTab: function (screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Get the active tab for a particular screen
            /// </summary>
            /// <returns type="object">Active tab object</returns>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// <returns type="object">Active tab object</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            // Get the name of the screens active tab
            var activeTabName = lsWire.getScreenInternalDetails(screen).activeTab;

            // Go get the tab and return it
            return lsWire.getTab(activeTabName, screen);
        },

        getTab: function (tabName, screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Get a tab object by its name
            /// </summary>
            /// <param name="tabName" type="string" optional="false">Name of the tab to retrieve</param>
            /// <returns type="object">Tab object</returns>
            /// </signature>
            /// <signature>
            /// <param name="tabName" type="string" optional="false">Name of the tab to retrieve</param>
            /// <param name="screen" type="object" optional="true">Screen object, if not passed, active screen will be used</param>
            /// <returns type="object">Tab object</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (tabName == undefined) return null;

            var result = null;

            // Make sure we have a screen object
            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            // Go get all the tabs for the screen
            var screenTabs = lsWire.getTabs(screen);

            // Loop over them all
            for (var i = 0; i < screenTabs.length; i++) {

                // If a match, return the tab, else continue
                if (screenTabs[i].data.name === tabName) {
                    result = screenTabs[i];
                    break;
                }
            }
            return result;

        },

        getContentItemTab: function (contentItem) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Get the tab object where the contentItem resides
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">contentItem</param>
            /// <returns type="object">Tab object</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined) return null;

            // Get the parent of our contentItem
            var tabObj = contentItem.parent;

            // Loop over the parents until a tab control is found
            while (tabObj != undefined && tabObj.kind != "Tab") {

                tabObj = tabObj.parent;

            }

            // If the tab is undefined return null else go get the tab from the pages object
            return tabObj == undefined ? undefined : lsWire.getTab(tabObj.name, contentItem.screen);

        },

        setTabValidationError: function (tabName, screen, cssClass) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Sets/Removes validation error class from tab headers
            /// </summary>
            /// <param name="tabName" type="string" optional="false">Name of the tab</param>
            /// </signature>
            /// <signature>
            /// <param name="tabName" type="string" optional="false">Name of the tab</param>
            /// <param name="screen" type="object" optional="true">Screen object that contains the tab header</param>
            /// </signature>
            /// <signature>
            /// <param name="tabName" type="string" optional="false">Name of the tab</param>
            /// <param name="screen" type="object" optional="true">Screen object that contains the tab header</param>
            /// <param name="cssClass" type="string" optional="true">CSS class to add/remove from the header element</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (tabName == undefined) return;

            var screenPage = lsWire.getPage(tabName, screen);

            cssClass = cssClass == undefined ? "validationErrors" : cssClass;

            if (screenPage != undefined) {
                if (_.any(screenPage.children, function (child) { return child.hasValidationErrors(true); })) {
                    lsWire.addTabButtonClass(tabName, cssClass, screen);
                } else {
                    lsWire.removeTabButtonClass(tabName, cssClass, screen);

                }
            }

        },

        changeActiveTabHeaderColor: function (color) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Set the color for the active tab button
            /// </summary>
            /// <param name="color" type="string" optional="false">Any type of valid CSS color</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (color != undefined) {
                lsWire.changeStyleRule('dynamicCss', '.msls-screen-tab-active .ui-btn-text', [['color', color]]);
            }
        },

        changeTabHeaderToDoubleLine: function (option) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Adjust the style for a tab header to be double line
            /// </summary>
            /// <param name="option" type="object">false to remove the dynamic style, else object of style properties</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // If you pass false, it will remove the styles

            var classProperties = [
				['height', '5.5em'],
				['margin-top', '-7px'],
				['padding-top', '0px']
            ];

            if (option !== undefined && option !== null && option === false) {
                classProperties = undefined;
            }

            lsWire.changeStyleRule('dynamicCss', '.msls-header .msls-tabs-bar', classProperties);
        },

        tabHeaderScrollFix: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Fix for the scrollbar cutting into the header area
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (lsWire.tabHeaderScrollFixApplied) return;

            var classProperties = [];

            var containerHeight = $(".msls-tabs-bar").height();
            containerHeight += 10;
            classProperties.push(['height', containerHeight + 'px']);

            lsWire.changeStyleRule('dynamicCss', '.msls-header .msls-tabs-bar', classProperties);
            lsWire.tabHeaderScrollFixApplied = true;

        },

        changeTabDisplayName: function (tabName, text, screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Set the display name for the tab with the passed tab name
            /// </summary>
            /// <param name="tabName" typ="string" optional="false">Name of the tab</param>
            /// </signature>
            /// <signature>
            /// <param name="tabName" typ="string" optional="false">Name of the tab</param>
            /// <param name="text" type="string" optional="true">New text to display, no content resets to original</param>
            /// </signature>
            /// <signature>
            /// <param name="tabName" typ="string" optional="false">Name of the tab</param>
            /// <param name="text" type="string" optional="true">New text to display, no content resets to original</param>
            /// <param name="screen" type="object" optional = "true">Screen that contains the tab header</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (lsWire.isEmpty(tabName)) return;

            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            var pageId = "#" + screen.details._pageId;

            var tabButton = _.find($(".msls-screen-tab", pageId), function (e) {
                return $(e).data().mslsTabName == tabName;
            });

            if (lsWire.isEmpty(text)) {

                text = "";
                var page = _.find(screen.details.pages, function (p) {
                    return p.name == tabName;
                });

                if (page != undefined) {
                    text = page.displayName;
                }

            }

            var textElement = $(".ui-btn-text", tabButton);
            if (textElement.length == 0)
                textElement = $('.id-element', tabButton);

            if (textElement.length > 0)
                $(textElement)[0].textContent = text;


        },

        appendToTabDisplayName: function (tabName, text, screen) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Append to the original display name
            /// </summary>
            /// <param name="tabName" type="string" optional="false">Name of the tab</param>
            /// </signature>
            /// <signature>
            /// <param name="tabName" type="string" optional="false">Name of the tab</param>
            /// <param name="text" type="string" optional="true">Text to append to the display name, no content resets to original</param>			
            /// </signature>
            /// <signature>
            /// <param name="tabName" type="string" optional="false">Name of the tab</param>
            /// <param name="text" type="string" optional="true">Text to append to the display name, no content resets to original</param>			
            /// <param name="screen" type="object" optional = "true">Screen that contains the tab header</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (lsWire.isEmpty(tabName)) return;

            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            var pageId = "#" + screen.details._pageId;

            var tabButton = _.find($(".msls-screen-tab", pageId), function (e) {
                return $(e).data().mslsTabName == tabName;
            });

            var page = _.find(screen.details.pages, function (p) {
                return p.name == tabName;
            });

            if (page != undefined) {
                if (lsWire.isEmpty(text)) {
                    text = page.displayName;
                } else {
                    text = page.displayName + " " + text;
                }
            } else {
                text = "";
            }

            var textElement = $(".ui-btn-text", tabButton);
            if (textElement.length == 0)
                textElement = $('.id-element', tabButton);

            if (textElement.length > 0)
                $(textElement)[0].textContent = text;

        },

        hideTabsBar: function (screen, hide) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Hide the tabs bar
            /// </summary>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Screen object, defaults to active screen</param>
            /// </signature>
            /// <signature>
            /// <param name="screen" type="object" optional="true">Screen object, defaults to active screen</param>
            /// <param name="hide" type="boolean" optional="true">Defaults to true (hide), pass false to show</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            hide = hide == undefined ? true : hide;

            screen = screen == undefined ? lsWire.getActiveScreen() : screen;

            if (screen.details._rootContentItem.kind != "Screen") return;

            // Get all the title for this screen
            var screenTabsBar = document.getElementById(screen.details._pageId).getElementsByClassName("msls-tabs-bar")[0];

            if (screenTabsBar != undefined) {
                if (hide) {
                    screenTabsBar.classList.add("msls-collapsed");
                } else {
                    if (screenTabsBar.classList.contains("msls-collapsed")) {
                        screenTabsBar.classList.remove("msls-collapsed");
                    }
                }
            }
        },

        // #endregion Tab Methods


        // #region Control - 53 functions
        // ==========================================================

        addHeaderToLayout: function (contentItem, cssClass) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Add a header for a layout control
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the layout control</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the layout control</param>
            /// <param name="cssClass" type="string" optional="true">CSS Class for the header text - Defaults to msls-control-header</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined) return;

            cssClass = cssClass || "msls-control-header";

            var showLabel = contentItem.properties.attachedLabelPosition;

            if (showLabel !== "Hidden" && showLabel !== "None") {

                // Get the container element
                var container = contentItem._view._container[0];

                var div = document.createElement("div");
                var txt = document.createTextNode(contentItem.displayName);

                div.className = cssClass;
                div.style.marginLeft = '10px';
                div.appendChild(txt);

                container.insertBefore(div, container.firstChild);

            }
        },

        initializeTableControl: function (options) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initializes a LightSwitch Table for enhanced filtering/sorting
            /// .
            /// Option fields:
            /// contentItem: contentItem that will be our table
            /// element: Element that is used for the table control
            /// batchMode: Are we going to start in batch mode?
            /// filterDisabled: Are we going to disable the filter
            /// filterPopupName: Name of the popup holding the filter objects
            /// filterPopupColumnName: Name of the popup item for the columnName
            /// filterPopupOperatorName1: Name of the popup item for the first Operator
            /// filterPopupOperatorName2: Name of the popup item for the second Operator
            /// filterPopupConcatName: Name of the popup item for the concat dropdown
            /// filterPopupValueName1: Name of the popup item for the first value
            /// filterPopupValueName2: Name of the popup item for the second value
            /// </summary>
            /// <param name="options" type="object" optional="true">Properties to tweak the enhanced table</param>
            /// <returns type="object">Enhanced Table Object</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************


            // Private/Internal constructor
            var eht = function () {

                // Instance based properties
                var properties = {

                    // Obvious... pointers to our screen/contentItem objects
                    screen: options.contentItem.screen,
                    contentItem: options.contentItem,

                    // Define/default our filter popup items
                    filterPopupName: options.filterPopupName || "FilterPopup",
                    filterPopupColumnName: options.filterPopupColumnName || "ColumnName",
                    filterPopupOperatorName1: options.filterPopupOperatorName1 || "Operator1",
                    filterPopupOperatorName2: options.filterPopupOperatorName2 || "Operator2",
                    filterPopupConcatName: options.filterPopupConcatName || "Concat",
                    filterPopupValueName1: options.filterPopupValueName1 || "Value1",
                    filterPopupValueName2: options.fitlerPopupValueName2 || "Value2",

                    // Hold our big odata sort string
                    sortString: "",
                    sortColumns: [],

                    // Hold our big odata filter string
                    filterString: "",
                    filterColumns: [],

                    // Pointer to our array of table columns
                    tableColumns: options.contentItem.children[0].children,

                    // Pointer to the visual collection
                    visualCollection: options.contentItem._binding.value,

                    // Get the name of this controls data source, ie database name
                    dataSourceName: options.contentItem.model.dataSource.member.source.target.source.member.id.split('/')[0],

                    // Get the name of the data table associated with this control
                    dataTableName: options.contentItem.details._entry.name,

                    // Element is the HTML element that contains the table control
                    element: $(options.element),

                    // Are we going to be in batch mode or not
                    batchMode: options.batchMode || false,

                    // Are we going to disable filtering
                    filterDisabled: options.filterDisabled || false

                };

                function initialize() {

                    // Minimal requirements are the controls contentItem and element
                    if (properties.contentItem == undefined || properties.element == undefined) return;

                    // Update our query method for our dynamic sorting, only need to do this on initialize
                    // ==========================================================================================
                    var queryType = typeof myapp.activeDataWorkspace[properties.dataSourceName][properties.dataTableName];
                    options.contentItem.details._entry.simpleDescriptor.createQuery =
						function () {
						    if (queryType == "function") {
						        return this.dataWorkspace[properties.dataSourceName][properties.dataTableName]().filter(properties.filterString).orderBy(properties.sortString);
						    } else {
						        return this.dataWorkspace[properties.dataSourceName][properties.dataTableName].filter(properties.filterString).orderBy(properties.sortString);
						    }

						};


                    // Find and loop over each TH (header) element
                    $("th", properties.element).each(function (i) {

                        // Get the column header contentItem based on the index
                        var tableColumn = properties.tableColumns[i];

                        // Push the pointer onto our filter/sort arrays
                        properties.sortColumns.push(tableColumn);
                        properties.filterColumns.push(tableColumn);

                        // We only skip command (button) types, all others get passed for processing
                        if (tableColumn.kind === "Command") {
                            return;
                        }

                        // Initialize sort/filter property sets for this column
                        tableColumn.enhancedTable = {};
                        tableColumn.enhancedTable.sort = {};
                        tableColumn.enhancedTable.filter = {};

                        // Store the html element for ease of accessibility
                        tableColumn.enhancedTable.sort.element = $("<div class='lswire-sort-element'><span id='text'></span><span id='icon'></span><span id='iconText' class='lswire-sort-icon-text'></span></div>");
                        tableColumn.enhancedTable.filter.element = $("<div class='lswire-filter-element'><span id='text' class='lswire-filter-icon-text'></span><div id='icon' class='ui-btn-no-text ui-btn-inner ui-icon ui-icon-bars lswire-filter-icon-element'></div></div>");

                        // Reintroduce the table column name into our header element
                        $('#text', tableColumn.enhancedTable.sort.element).text(tableColumn.displayName);

                        // This is a hack to stop the propagation of the click on the parent element
                        $(this).off('vclick').on('vclick', function (e) { e.stopPropagation(); });

                        // Now replace the parent html with our new elements
                        $(this).html("");
                        $(this).append(tableColumn.enhancedTable.sort.element);
                        $(this).append(tableColumn.enhancedTable.filter.element);

                        // This property will hold which direction we are sorting, ASC, DESC, NULL
                        tableColumn.enhancedTable.sort.direction = null;

                        // Initialize the sort/filter position (ordering amongst themselvles)
                        tableColumn.enhancedTable.sort.position = null;
                        tableColumn.enhancedTable.filter.position = null;

                        // Initialize our odata compatible field name, accounts for navigational names
                        tableColumn.enhancedTable.odataName = (tableColumn.bindingPath.slice(5)).replace('.', '/');

                        // Add our own click handlers back in for each header part
                        initializeColumnSort(tableColumn);

                        // If we are disabling the filtering, don't initialize
                        if (!properties.filterDisabled) initializeColumnFilter(tableColumn);

                        // If we are to disable filtering, hide the element
                        if (properties.filterDisabled) $(tableColumn.enhancedTable.filter.element).hide();

                    });
                };


                // ///////////////////////////////////////////////////////////////////////////////////////////
                // ==========================================================================================
                // ==========================================================================================
                // Internal 
                // ==========================================================================================
                // ==========================================================================================
                // ///////////////////////////////////////////////////////////////////////////////////////////


                // Initializes a column for our version of sorting
                // ==========================================================================================
                function initializeColumnSort(tableColumn) {

                    var sort = tableColumn.enhancedTable.sort;

                    // Add the pointer style to the header element
                    $(sort.element).css('cursor', 'pointer');

                    $(sort.element).on("click", function (e) {

                        e.stopPropagation();

                        // Adjust the direction based on the previous direction
                        // Ordering flow is Ascending -> Descending -> no sort
                        switch (sort.direction) {
                            case "asc":
                                // We were ascending... so change to Descending
                                sort.direction = "desc";
                                break;

                            case "desc":
                                // We were descending... so change to NULL, no sort
                                sort.direction = null;
                                sort.position = null;

                                // Since we removed a sort item, re-sort the headers based on their sort position
                                properties.sortColumns = _.sortBy(properties.sortColumns, function (item) {
                                    return item.enhancedTable.sort.position == null ? 10000 : item.enhancedTable.sort.position;
                                });
                                break;

                            default:
                                // We were null or undefined, so we go to ascending now
                                sort.direction = "asc";
                                sort.position = 1000;

                                // Since we added a sort item, re-sort the fields based on their sort position
                                properties.sortColumns = _.sortBy(properties.sortColumns, function (item) {
                                    return item.enhancedTable.sort.position == null ? 10000 : item.enhancedTable.sort.position;
                                });
                                break;
                        }

                        // Recalculate the sortPosition property, for use in the header display
                        _.each(properties.sortColumns, function (item, index) {
                            if (item.enhancedTable.sort.position != null) {
                                item.enhancedTable.sort.position = index;
                            }
                        });

                        // If batchMode was sent as true, then don't set the sort, user will do this
                        if (!properties.batchMode) reQuery();

                        // Update the headers with the sort information (graphic, position)
                        updateTableHeaders();

                    });
                };

                // Initializes a column for individual filter capability
                // ==========================================================================================
                function initializeColumnFilter(tableColumn) {

                    var filter = tableColumn.enhancedTable.filter;

                    // A filter is: Operator: xxxx, Value: xxxx
                    filter.set = [];
                    filter.concatType = null;

                    var propertyType = tableColumn.valueModel.propertyType;

                    filter.dataType = propertyType.__isPrimitiveType
						                  ? propertyType.id
						                  : propertyType.underlyingType.id;

                    // Add the pointer style to the header element
                    $(filter.element).css('cursor', 'pointer');

                    // Look for the filter popup
                    var filterPopup = properties.screen.findContentItem(properties.filterPopupName);

                    // If found, initialize the on click
                    if (filterPopup != undefined) {
                        $(filter.element).on("click", function (e) {

                            e.stopPropagation();

                            // Quick/Easy hack to make sure your dropdowns can be dynamic
                            // Remove our stale popup so we can populate with new dropdown values
                            $("div[data-msls-name*='" + properties.filterPopupName + "']").remove();

                            // Pointer to our active column
                            properties.activeColumn = tableColumn;

                            // Initialize our screen inputs
                            initializeFilterOperators();
                            initializeFilterConcats();
                            initializeFilterValues();

                            // Update our field/column name
                            properties.screen[properties.filterPopupColumnName] = tableColumn.displayName;

                            // Finally show the popup, DOM for the popup gets recreated dynamically
                            properties.screen.showPopup(properties.filterPopupName);

                        });
                    }

                };

                // Stuff the filter operator dropdowns with appropriate values
                // ==========================================================================================
                function initializeFilterOperators() {

                    // Get our current column filter property
                    var filter = properties.activeColumn.enhancedTable.filter;

                    // Get our operator contentItems
                    var operatorContentItems = [];
                    operatorContentItems.push(properties.screen.findContentItem(properties.filterPopupOperatorName1));
                    operatorContentItems.push(properties.screen.findContentItem(properties.filterPopupOperatorName2));

                    var operators;
                    var defaultValueIndex = 0;

                    if (filter.dataType.indexOf(":String") != -1) {

                        defaultValueIndex = 2;
                        operators = [
							{ stringValue: "Is equal to", value: "eq" },
							{ stringValue: "Is not equal to", value: "ne" },
							{ stringValue: "Starts with", value: "startswith" },
							{ stringValue: "Contains", value: "substringof" },
							{ stringValue: "Does not contain", value: "not substringof" },
							{ stringValue: "Ends with", value: "endswith" }
                        ];

                    } else if (filter.dataType.indexOf(":Date") != -1) {
                        operators = [
							{ stringValue: "Is equal to", value: "eq" },
							{ stringValue: "Is not equal to", value: "ne" },
							{ stringValue: "Is after or equal to", value: "ge" },
							{ stringValue: "Is after", value: "gt" },
							{ stringValue: "Is before or equal to", value: "le" },
							{ stringValue: "Is before", value: "lt" }
                        ];

                    } else {
                        operators = [
							{ stringValue: "Is equal to", value: "eq" },
							{ stringValue: "Is not equal to", value: "ne" },
							{ stringValue: "Is greater than or equal to", value: "ge" },
							{ stringValue: "Is greater than", value: "gt" },
							{ stringValue: "Is less than or equal to", value: "le" },
							{ stringValue: "Is less than", value: "lt" }
                        ];

                    }

                    for (var i = 0; i < operatorContentItems.length; i++) {
                        var defaultValue = operators[defaultValueIndex].value;
                        var defaultStringValue = operators[defaultValueIndex].stringValue;

                        // If there was a saved filter, get it
                        if (filter.set[i] != undefined && filter.set[i].operator != undefined) {
                            var savedFilter = _.find(operators, function (op) {
                                return op.value == filter.set[i].operator;
                            });

                            if (savedFilter) {
                                // Save our value into the screen property
                                defaultValue = savedFilter.value;
                                defaultStringValue = savedFilter.stringValue;
                            }

                        }

                        // Set our values
                        operatorContentItems[i].choiceList = operators;
                        operatorContentItems[i].value = defaultValue;
                        operatorContentItems[i].stringValue = defaultStringValue;
                        properties.screen[operatorContentItems[i].name] = defaultValue;
                    }

                };

                // Stuff the filter Concat dropdown with appropriate values
                // ==========================================================================================
                function initializeFilterConcats() {

                    // Get our current column filter property
                    var filter = properties.activeColumn.enhancedTable.filter;

                    var concat = properties.screen.findContentItem(properties.filterPopupConcatName);

                    concat.choiceList = [
						{ stringValue: "And", value: "and" },
						{ stringValue: "Or", value: "or" }
                    ];

                    properties.screen[concat.name] = filter.concatType || "or";

                };

                // Initialize popup filter value fields
                // ==========================================================================================
                function initializeFilterValues() {

                    // Get our current column filter property
                    var filter = properties.activeColumn.enhancedTable.filter;

                    // Get our value contentItems
                    var valueContentItems = [];
                    valueContentItems.push(properties.screen.findContentItem(properties.filterPopupValueName1));
                    valueContentItems.push(properties.screen.findContentItem(properties.filterPopupValueName2));

                    for (var i = 0; i < valueContentItems.length; i++) {

                        var defaultValue = null;

                        if (filter.set[i] != undefined && filter.set[i].value != undefined) {
                            defaultValue = filter.set[i].value;
                        }

                        properties.screen[valueContentItems[i].name] = defaultValue;


                    }

                };

                // Aggregate the column filter settings into a big string
                // ==========================================================================================
                function updateFilterString() {

                    // Create our a string that will be used for our sort
                    properties.filterString = "";

                    // If filters are enabled, go update, else string remains as empty
                    if (!properties.filterDisabled) {

                        // Loop over each of the filterable columns
                        _.each(properties.filterColumns, function (item) {

                            // If the column has a filter position, lets work it
                            if (item.enhancedTable.filter.position != undefined && item.enhancedTable.filter.position != null) {

                                // Go get the filter string for this column
                                var temp = getColumnFilterString(item.enhancedTable.filter, item.enhancedTable.odataName);

                                // If we have existing data in the string and we got a filter back for this column, add our and
                                if (properties.filterString.length > 0 && temp.length > 0) properties.filterString += " and ";

                                // Simple concat
                                properties.filterString += temp;

                            }
                        });
                    }
                };

                // Aggregate the column sort settings into a big string
                // ==========================================================================================
                function updateSortString() {

                    // Empty any existing sort definition
                    properties.sortString = "";

                    // Create an OData string that will be used for our sort
                    _.each(properties.sortColumns, function (item) {
                        if (item.enhancedTable.sort.position != undefined && item.enhancedTable.sort.position != null) {
                            properties.sortString += item.enhancedTable.odataName + " " + item.enhancedTable.sort.direction + ", ";
                        }
                    });

                    // Remove the last character, which is the last comma
                    properties.sortString = properties.sortString.slice(0, -2);

                };

                // Get a formatted filter string for an individual column
                // ==========================================================================================
                function getColumnFilterString(filter, dataField) {

                    var filterString = "";
                    var formatString;

                    // Only if we have at least one filter defined
                    if (filter.set[0] != undefined) {

                        // Lets go process the set
                        _.each(filter.set, function (item) {

                            var tempValue = item.value;

                            // Go get our format string for this item
                            formatString = getFilterFormatString(item.operator, filter.dataType);

                            // If this is a date data type, we need to preprocess the value for transport
                            if (filter.dataType.indexOf(":Date") != -1) {

                                tempValue = new Date(tempValue);

                            };

                            // If there is data in our filter string, add our concat before the next
                            if (filterString.length > 0) filterString += filter.concatType + " ";

                            // Add format to the filter and add to our bigger item
                            filterString += String.format(formatString, dataField, item.operator, msls._toODataString(tempValue, filter.dataType));

                        });

                    }

                    // Enclose this 'set' in parens
                    return filterString != "" ? "(" + filterString + ")" : filterString;
                };

                // Get the format template for a filter
                // ==========================================================================================
                function getFilterFormatString(operator, dataType) {

                    var result;

                    if (dataType.indexOf(":String") != -1) {
                        switch (operator) {
                            case "substringof":
                                result = "{1}({2}, {0}) ";
                                break;

                            case "not substringof":
                                result = "{1}({2}, {0}) ";
                                break;

                            case "startswith":
                                result = "{1}({0}, {2}) ";
                                break;

                            case "endswith":
                                result = "{1}({0}, {2}) ";
                                break;

                            default:
                                result = "{0} {1} {2} ";
                                break;
                        }

                    } else {
                        result = "{0} {1} {2} ";
                    }

                    return result;

                };


                // ///////////////////////////////////////////////////////////////////////////////////////////
                // ==========================================================================================
                // ==========================================================================================
                // External 
                // ==========================================================================================
                // ==========================================================================================
                // ///////////////////////////////////////////////////////////////////////////////////////////


                function reQuery() {

                    // *****************************************************************************************************
                    // *****************************************************************************************************
                    /// <summary>
                    /// Used to refresh the table, requeries
                    /// </summary>
                    // *****************************************************************************************************
                    // *****************************************************************************************************

                    // Update our different OData strings
                    updateFilterString();
                    updateSortString();

                    // Refresh the visual collection, resulting in the table refreshing
                    properties.visualCollection.refresh();

                };

                function clearAll() {

                    // *****************************************************************************************************
                    // *****************************************************************************************************
                    /// <summary>
                    /// Clears any sort and filters that have been set, call reQuery() after to refresh the table
                    /// </summary>
                    // *****************************************************************************************************
                    // *****************************************************************************************************

                    // Clear the sorts and filters, defer the query
                    clearAllSorts();
                    clearAllFilters();

                };

                function clearAllSorts() {

                    // *****************************************************************************************************
                    // *****************************************************************************************************
                    /// <summary>
                    /// Clear all sort items
                    /// </summary>
                    // *****************************************************************************************************
                    // *****************************************************************************************************

                    // Loop over all the columns, set sort properties to null
                    _.each(properties.sortColumns, function (item) {
                        item.enhancedTable.sort.position = null;
                        item.enhancedTable.sort.direction = null;
                    });

                    // Update the headers with the sort information (graphic, position)
                    updateTableHeaders();

                };

                function disableFilters(yes) {

                    // *****************************************************************************************************
                    // *****************************************************************************************************
                    /// <summary>
                    /// Ability to disable/enable filter capability after initialization
                    /// </summary>
                    /// <param name="yes" type="boolean">true/false</param>
                    // *****************************************************************************************************
                    // *****************************************************************************************************

                    // Make sure we have a value
                    if (yes == undefined) yes = true;

                    // If yes, go ahead and clear all the filters first
                    if (yes) {
                        clearAllFilters();
                    }

                    // Loop over the columns, and show/hide the filter icon, in essence removing filtering
                    _.each(properties.filterColumns, function (item) {
                        if (yes) {
                            $(item.enhancedTable.filter.element).hide();
                        } else {

                            // Look for the filter popup
                            var filterPopup = properties.screen.findContentItem(properties.filterPopupName);

                            // If found, go ahead and show the filter icon
                            if (filterPopup != undefined) $(item.enhancedTable.filter.element).show();
                        }
                    });

                };

                function setColumnFilter() {

                    // *****************************************************************************************************
                    // *****************************************************************************************************
                    /// <summary>
                    /// Set the filter for the individual column, called from the filter popup
                    /// </summary>
                    // *****************************************************************************************************
                    // *****************************************************************************************************

                    // Get the column filter object for this popup instance
                    var filter = properties.activeColumn.enhancedTable.filter;

                    // Make sure we start fresh
                    filter.set = [];

                    // Only proceed if there is a value in the first value input element
                    if (properties.screen[properties.filterPopupValueName1] != undefined && properties.screen[properties.filterPopupValueName1] != null) {

                        // Add this first key/value set into our filter set
                        filter.set.push({
                            operator: properties.screen[properties.filterPopupOperatorName1],
                            value: properties.screen[properties.filterPopupValueName1]
                        });

                        // If there is also data in the second value input element
                        if (properties.screen[properties.filterPopupValueName2] != undefined && properties.screen[properties.filterPopupValueName2] != null) {

                            // Add this second key/value into the set
                            filter.set.push({
                                operator: properties.screen[properties.filterPopupOperatorName2],
                                value: properties.screen[properties.filterPopupValueName2]
                            });

                        }

                    }


                    // Initialize the filter position for this column
                    if (filter.position == null)
                        filter.position = filter.set.length > 0 ? 1000 : null;

                    // Setup the concat field, regardless of values or not
                    filter.concatType = properties.screen[properties.filterPopupConcatName];

                    // Since we added/removed a filter item, re-sort the fields based on their filter position
                    properties.filterColumns = _.sortBy(properties.filterColumns, function (item) {
                        return item.enhancedTable.filter.position == null ? 10000 : item.enhancedTable.filter.position;
                    });

                    // Recalculate the filter position property, for use in the header display
                    _.each(properties.filterColumns, function (item, index) {
                        if (item.enhancedTable.filter.position != null) {
                            item.enhancedTable.filter.position = index;
                        }
                    });

                    // Get the data if we are not in batch mode
                    if (!properties.batchMode) reQuery();

                    // So now lets go update the column headers
                    updateTableHeaders();

                };

                function clearAllFilters() {

                    // *****************************************************************************************************
                    // *****************************************************************************************************
                    /// <summary>
                    /// Clear the filter fields, if in batchMode also execute the sort
                    /// </summary>
                    // *****************************************************************************************************
                    // *****************************************************************************************************

                    // Loop over the filter columns
                    _.each(properties.filterColumns, function (item) {
                        var filter = item.enhancedTable.filter;

                        // Set their individual data to null
                        filter.position = null;
                        filter.set = [];
                        filter.concatType = null;
                    });


                    // Update the headers with the filter information (graphic, position)
                    updateTableHeaders();

                };

                function clearColumnFilter() {

                    // *****************************************************************************************************
                    // *****************************************************************************************************
                    /// <summary>
                    /// Clear the filter fields, if in batchMode also executes the sort
                    /// </summary>
                    // *****************************************************************************************************
                    // *****************************************************************************************************

                    // Get the column filter object for this popup instance
                    var filter = properties.activeColumn.enhancedTable.filter;

                    // Nullify this individual columns filter data
                    filter.position = null;
                    filter.set = [];
                    filter.concatType = null;

                    // Re sort the filter columns, setting up for updating the header display
                    properties.filterColumns = _.sortBy(properties.filterColumns, function (item) {
                        return item.enhancedTable.filter.position == null ? 10000 : item.enhancedTable.filter.position;
                    });

                    // Recalculate the sortPosition property, for use in the header display
                    _.each(properties.filterColumns, function (item, index) {
                        if (item.enhancedTable.filter.position != null) {
                            item.enhancedTable.filter.position = index;
                        }
                    });

                    // Get the data if we are not in batch mode
                    if (!properties.batchMode) reQuery();

                    // Update the headers with the sort information (graphic, position)
                    updateTableHeaders();

                };

                function updateTableHeaders() {

                    // *****************************************************************************************************
                    // *****************************************************************************************************
                    /// <summary>
                    /// Update table column headers based on sort/filter properties
                    /// </summary>
                    // *****************************************************************************************************
                    // *****************************************************************************************************

                    // loop over our headers
                    _.each(properties.tableColumns, function (item) {

                        var showActive = true;
                        var parentElement = item.enhancedTable.sort.element.parent();
                        var sortElement = item.enhancedTable.sort.element;
                        var filterElement = item.enhancedTable.filter.element;

                        // If sort position is set, update the header
                        if (item.enhancedTable.sort.position != null) {
                            var graphic = item.enhancedTable.sort.direction == "asc" ? " - &#9650" : " - &#9660";
                            $('#iconText', sortElement).html(item.enhancedTable.sort.position + 1);
                            $('#icon', sortElement).html(graphic);
                        } else {

                            // No sort position, so showActive is a no, so far
                            showActive = false;

                            // No sort position, so just show the default text
                            $('#iconText', sortElement).html("");
                            $('#icon', sortElement).html("");
                        }


                        // Only update the filter items if filters are enabled
                        if (!properties.filterDisabled) {

                            // Now lets do the same for the filters, is there a sort position?
                            if (item.enhancedTable.filter.position != null) {

                                // If so, make sure our showActive is now also true
                                showActive = true;

                                // Update the screen with its position number
                                $('#text', filterElement).text(item.enhancedTable.filter.position + 1);
                            } else {

                                $('#text', filterElement).text("");
                            }
                        }

                        // Finally, if showActive, add a class to make pretty the parent element
                        if (showActive) {
                            $(parentElement).addClass('ui-btn-active');
                        } else {
                            $(parentElement).removeClass('ui-btn-active');
                        }


                    });
                };

                function setBatchMode(onOff) {

                    // *****************************************************************************************************
                    // *****************************************************************************************************
                    /// <summary>
                    /// Allow dynamically toggling batch mode
                    /// </summary>
                    /// <param name="onOff">true/off</param>
                    // *****************************************************************************************************
                    // *****************************************************************************************************

                    properties.batchMode = onOff || false;
                };

                function getBatchMode() {

                    // *****************************************************************************************************
                    // *****************************************************************************************************
                    /// <summary>
                    /// Is the table if batch mode or not
                    /// </summary>
                    /// <returns type="boolean">true/false</returns>
                    // *****************************************************************************************************
                    // *****************************************************************************************************

                    return properties.batchMode;
                };

                function closeFilterPopup() {

                    // *****************************************************************************************************
                    // *****************************************************************************************************
                    /// <summary>
                    /// Helper to make it easy to close the filter popup
                    /// </summary>
                    // *****************************************************************************************************
                    // *****************************************************************************************************

                    properties.screen.closePopup(properties.filterPopupName);
                };

                // Finally... our constructor
                // ==========================================================================================
                (function () {
                    initialize();
                })();

                // What do we want to expose to the outside
                // ==========================================================================================
                return {
                    reQuery: reQuery,
                    clearAll: clearAll,
                    clearAllSorts: clearAllSorts,
                    clearAllFilters: clearAllFilters,
                    clearColumnFilter: clearColumnFilter,
                    disableFilters: disableFilters,
                    setColumnFilter: setColumnFilter,
                    closeFilterPopup: closeFilterPopup,
                    setBatchMode: setBatchMode,
                    getBatchMode: getBatchMode
                };
            };

            // ============================================
            // ============================================
            return new eht(options);


        },

        activateTableHeaderDock: function (contentItem) {

        	// *****************************************************************************************************
        	// *****************************************************************************************************
        	/// <summary>
        	/// Activate a tables ability to dock its column headers at the top of the window
        	/// when those headers touch the top
        	/// </summary>
        	/// <param name="contentItem" type="object" optional="false">ContentItem of the table</param>
        	// *****************************************************************************************************
        	// *****************************************************************************************************


        	// Make sure we have a rule that we will override dynamically
        	lsWire.changeStyleRule("dynamicCss", ".lswire-fixed-element th", [
				{ name: "width", value: "auto" }
        	]);

        	// Make sure we have an object created on this content Item
        	contentItem.lsWire = contentItem.lsWire || {};
        	var lsw = contentItem.lsWire;

        	// Get our table and header objects, and basic settings
        	var container = contentItem._view._container[0];

        	lsw.table = container.getElementsByTagName("table")[0];
        	lsw.tableHead = container.getElementsByTagName("thead")[0];
        	lsw.styleSheet = lsWire.getStyleSheet("dynamicCss");
        	lsw.pageId = "#" + contentItem.screen.details._pageId;
        	lsw.fixed = false;


        	// *****************************************************************************************************
        	// function that will be used to monitor the scrolling
        	// giving it a unique name allows us to destroy easily
        	// *****************************************************************************************************
        	lsw[lsw.pageId + "_catchScroll"] = function (e) {

        		// Get the current location of our header row
        		var curBoundingRec = lsw.table.getBoundingClientRect();

        		// If the row is not already fixed and its top is offscreen
        		if (lsw.fixed == false && curBoundingRec.top <= 0) {

        			// Add our fixed element class to the head element
        			$(lsw.tableHead).addClass("lswire-fixed-element");

        			// Find the first cell on the page, so we can get the dom width
        			var firstCell = $("td", ".ui-page-active").first()[0];

        			if (firstCell != undefined) {

        				// Calculate and set the width of the header cells
        				setTableHeaderCellWidth(contentItem);

        				// Set our flag saying we are in fixed mode
        				lsw.fixed = true;
        			}

        		} else if (curBoundingRec.top > 0 && lsw.fixed == true) {

        			// So the table top is now visible
        			// Remove our fixed element class
        			$(lsw.tableHead).removeClass("lswire-fixed-element");

        			// Change our flag
        			lsw.fixed = false;
        		}

        	};


        	// Obviously we won't do anything unless we actually found the table
        	if (lsw.table != undefined) {

        		// So we can track position, get the original 
        		// top and bottom positon for the table
        		var boundingRec = lsw.table.getBoundingClientRect();
        		lsw.originalTop = boundingRec.top;
        		lsw.originalBottom = boundingRec.bottom;

        		// Set a flag to identify if we are in a fixed mode.
        		// Yes, another option would be to ck css.
        		lsw.fixed = false;

        		// Meat of our function monitor the scroll event
        		$(document).on("scroll", lsw[lsw.pageId + "_catchScroll"]);


        		// *****************************************************************************************************
        		// Monitor the resize event for the window
        		// *****************************************************************************************************
        		$(window).resizeEnd({
        			delay: 150
        		}, function () {

        			// When window is resized, recalculate table cell width
        			if (lsw.table) {

        				// Calculate and set the width of the header cells
        				setTableHeaderCellWidth(contentItem);

        			}
        		});
        	};


        	// *****************************************************************************************************
        	// Set the width of the column headers based on the width of the actual content cells
        	// *****************************************************************************************************
        	function setTableHeaderCellWidth(_contentItem) {

        		var _lsw = _contentItem.lsWire;

        		// Find the first cell on the page, so we can get the dom width
        		var firstCell = $("td", ".ui-page-active").first()[0];

        		if (firstCell != undefined) {

        			// Calculate the width our header cells should be, based on width
        			// of the cells holding the content
        			var padding = parseInt($(firstCell).css("padding-left")) * 2;
        			var width = firstCell.getBoundingClientRect().width;
        			lsw.cellWidth = width - padding;

        			var cssRule = lsWire.getStyleRule(_lsw.styleSheet, ".lswire-fixed-element th");
        			cssRule.rule.style.cssText = "width: " + _lsw.cellWidth + "px !important; ";

        		}
        	}


        },

        disposeTableHeaderDock: function (contentItem) {

        	// *****************************************************************************************************
        	// *****************************************************************************************************
        	/// <summary>
        	/// Dispose of the table header scrolling handler
        	/// </summary>
        	/// <param name="contentItem" type="object" optional="false">ContentItem of the table</param>
        	// *****************************************************************************************************
        	// *****************************************************************************************************


        	var lsw = contentItem.lsWire;

        	// If the contentItem still has the scroll method, turn it off
        	if (lsw && lsw[lsw.pageId + "_catchScroll"] != undefined) {
        		$(document).off("scroll", lsw[lsw.pageId + "_catchScroll"]);
        		lsw[lsw.pageId + "_catchScroll"] = null;
        	}

        },

        renderHtmlInCustomControl: function (contentItem, cssClass) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Render an HTML string within a custom control
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the control</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the control</param>
            /// <param name="cssClass" type="string" optional="true">cssClass to use for the control</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined) return;

            var id = "htmlRenderFor-" + contentItem.name;

            contentItem.dataBind("_view.isRendered", function (isRendered) {

                if (isRendered) {

                    // Create our container
                    var htmlContainer = document.createElement("DIV");
                    var customClass = cssClass != undefined ? cssClass : "lswire-render-html";
                    htmlContainer.className = "ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow ui-body-a ui-mini " + customClass;
                    htmlContainer.id = id;
                    htmlContainer.innerHTML = contentItem.value;

                    contentItem._view._contentContainer[0].appendChild(htmlContainer);
                }
            });

            contentItem.dataBind("_view.isRendered", function (isRendered) {

                if (isRendered) {

                    contentItem.dataBind("value", function (newValue) {

                        if (newValue == undefined) {
                            newValue = "";
                        }

                        if (contentItem._view.isRendered) {
                            var element = contentItem._view._contentContainer[0].querySelector("#" + id);
                            element.innerHTML = newValue;
                        }

                    });

                }
            });

        },

        changeButtonIcon: function (contentItem, currentIconClass, newIconClass) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Change the icon of a button
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">contentItem of the standard button</param>
            /// <param name="currentIconClass" type="string" optional="false">Class name of the current icon</param>
            /// <param name="newIconClass" type="string" optional="false">Class name of the new icon</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined || currentIconClass == undefined || newIconClass == undefined) return;

            // Get the container element
            var container = contentItem._view._container[0];

            var element = container.getElementsByClassName("ui-icon")[0];

            if (element) {
                element.classList.remove(currentIconClass);
                element.classList.add(newIconClass);
            };

        },

        toggleButtonClass: function (contentItem, cssClass) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Toggle a cssClass for a button
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">contentItem of the standard button</param>
            /// <param name="cssClass" type="string" optional="false">Class name to toggle</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined || cssClass == undefined) return;

            // Get the container element
            var container = contentItem._view._container[0];

            var element = container.getElementsByClassName("ui-icon")[0];

            if (element) {
                element.classList.toggle(cssClass);
            };

        },

        removeButtonClass: function (contentItem, cssClass) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Remove a cssClass for a button
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">contentItem of the standard button</param>
            /// <param name="cssClass" type="string" optional="false">Class name to toggle</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined || cssClass == undefined) return;

            // Get the container element
            var container = contentItem._view._container[0];

            var element = container.getElementsByClassName("ui-icon")[0];

            if (element) {
                element.classList.remove(cssClass);
            };

        },

        addButtonClass: function (contentItem, cssClass) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Add a cssClass for a button
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">contentItem of the standard button</param>
            /// <param name="cssClass" type="string" optional="false">Class name to toggle</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined || cssClass == undefined) return;

            // Get the container element
            var container = contentItem._view._container[0];

            var element = container.getElementsByClassName("ui-icon")[0];

            if (element) {
                element.classList.add(cssClass);
            };

        },

        renderButtonAsIcon: function (contentItem, icon, noText) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Render a standard button as an icon button
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">contentItem of the standard button</param>
            /// <param name="icon" type="string" optional="false">Class name of the icon - 
            /// ok, cancel, discard, decline, save, logout, back, search, camera, trash, add, remove,
            /// video, tag, gear, contacts, edit, question, refreesh, list, folder, move, text, attachment,
            /// warning, star, addfavorite, filter, sort, addpicture, document, download, calendar, dropdown
            /// </param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">contentItem of the standard button</param>
            /// <param name="icon" type="string" optional="false">Class name of the icon - 
            /// ok, cancel, discard, decline, save, logout, back, search, camera, trash, add, remove,
            /// video, tag, gear, contacts, edit, question, refreesh, list, folder, move, text, attachment,
            /// warning, star, addfavorite, filter, sort, addpicture, document, download, calendar, dropdown
            /// </param>
            /// <param name="noText" type="boolean" optional="true">Show button text or not, defaults to false</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined || icon == undefined) return;

            var div = document.createElement("div");
            var btnSpan = document.createElement("span");
            var txtSpan = document.createElement("span");
            var txt = document.createTextNode(contentItem.displayName);
            var iconSpan = document.createElement("span");

            div.className = "id-element msls-large-icon ui-btn ui-shadow ui-mini ui-btn-icon-top ui-btn-up-a";
            div.style.boxShadow = "none";
            div.setAttribute("data-theme", "a");

            btnSpan.className = "ui-btn-inner";

            txtSpan.className = "ui-btn-text";
            txtSpan.appendChild(txt);

            iconSpan.className = "ui-icon " + icon + " ui-icon-shadow";

            // Default noText to false (show text)
            noText = noText || false;

            if (noText == true) {

                // Add all of our items under the big div
                btnSpan.appendChild(iconSpan);

            } else {

                // Add all of our items under the big div
                btnSpan.appendChild(txtSpan);
                btnSpan.appendChild(iconSpan);

                // Bind to the displayName so the text can be dynamically changed
                contentItem.dataBind('displayName', function (newValue) {
                    txtSpan.textContent = newValue;
                });

            }

            // Add the button to the div
            div.appendChild(btnSpan);

            // Get the container element
            var container = contentItem._view._container[0];

            // Add our new button to the element
            container.replaceChild(div, container.firstChild);

            // Removing the msls-leaf will drop the big padding typically used
            var parent = lsWire.getParentByClassName(container, "msls-leaf");
            parent.classList.remove('msls-leaf');

        },

        limitNumberOfCharacters: function (contentItem, maxLength, showCount, labelTemplate) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>Enhance an Input control to limit the number of allowed characters.<br/>
            /// Also will update the associated label to show a realtime character count</summary>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the input control</param>
            /// <param name="maxLength" type="integer" optional="false">Maximum number of characters allowed</param>
            /// <param name="showCount" type="boolean" optional="true">Show the count on the label?</param>
            /// <param name="labelTemplate" type="string" optional="true">"{{displayName}} ({{count}} of {{max}} characters left)}</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the input control</param>
            /// <param name="maxLength" type="integer" optional="false">Maximum number of characters allowed</param>
            /// <param name="showCount" type="boolean" optional="true">Show the count on the label?</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the input control</param>
            /// <param name="maxLength" type="integer" optional="false">Maximum number of characters allowed</param>
            /// <param name="showCount" type="boolean" optional="true">Show the count on the label?</param>
            /// <param name="labelTemplate" type="string" optional="true">"{{displayName}} ({{count}} of {{max}} characters left)}</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined || maxLength == undefined) return;

            labelTemplate = labelTemplate || "{{displayName}} ({{count}} of {{max}} characters left)";
            showCount = showCount === undefined ? true : showCount;

            // Bind to the isRendered property so we know when its safe
            contentItem.dataBind("_view.isRendered", function (isRendered) {

                if (isRendered) {

                    // If no label... do nothing except return
                    if (contentItem.properties.attachedLabelPosition === "None" || contentItem.properties.attachedLabelPosition === "Hidden")
                        showCount = false;

                    // Get the label element to hold the messaging
                    var label = contentItem._view._container[0].getElementsByTagName('label')[0];
                    var input = contentItem._view._container[0].getElementsByClassName('id-element')[0];

                    // Get our text area
                    var displayName = contentItem.displayName;

                    contentItem.dataBind("value", function () {
                        if (showCount) {
                            var currentLength = contentItem.stringValue == undefined ? 0 : contentItem.stringValue.length;
                            updateCharacterCountLabel(label, displayName, currentLength, maxLength, labelTemplate);
                        }
                    });


                    // Setup listener number 1...  for pasted text
                    // =================================================================================================
                    input.onpaste = function (e) {

                        // As usual, don't let the default happen
                        e.preventDefault();
                        var pastedText = undefined;

                        // Differences between IE and others, get the pasted text
                        if (window.clipboardData && window.clipboardData.getData) {
                            pastedText = window.clipboardData.getData('Text');
                        } else if (e.clipboardData && e.clipboardData.getData) {
                            pastedText = e.clipboardData.getData('text/plain');
                        }

                        // Add existing text with pasted text, then truncate to the max allowed
                        contentItem.value = (input.value + pastedText).substring(0, maxLength);

                        // Update the label with the new counts
                        if (showCount) {
                            var currentLength = contentItem.stringValue == undefined ? 0 : contentItem.stringValue.length;
                            updateCharacterCountLabel(label, displayName, currentLength, maxLength, labelTemplate);
                        }

                    };

                    // Setup listener number 2...  for keydowns
                    // =================================================================================================
                    input.onkeydown = function (e) {

                        // Going forward with new character or backspacing, don't process if just arrow keys or the tab key
                        if (e.keyCode !== 37 && e.keyCode !== 38 && e.keyCode !== 39 && e.keyCode !== 40 && e.keyCode != 9) {

                            // keycode 8 is backspace
                            var nextLength = e.keyCode === 8
								                 ? e.target.value.length - 1
								                 : e.target.value.length + 1;

                            // Make sure we don't go over our boundries
                            if (nextLength < 0 || (nextLength > maxLength && e.keyCode)) {
                                e.preventDefault();
                                return false;
                            };

                            // Update our label with new counts
                            if (showCount)
                                updateCharacterCountLabel(label, displayName, nextLength, maxLength, labelTemplate);
                        }
                        return true;
                    };
                }
            });


            // =================================================================================================
            // Helper function to update an input elements label with our character count template
            // =================================================================================================
            var updateCharacterCountLabel = function (label, displayName, value, maxLen, template) {

                // Get the initial number of characters left
                var whatsLeft = maxLen - value;

                // Add the messaging
                var countText = template.replace("{{displayName}}", displayName);
                countText = countText.replace("{{count}}", whatsLeft);
                countText = countText.replace("{{max}}", maxLen);
                label.innerText = countText;

            };

        },

        enableListToBeMultiSelect: function (contentItem, totalAllowedSelections, persistSelections) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>Enable Multi-Item selection on a list/table</summary>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the list/table control</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the list/table control</param>
            /// <param name="totalAllowedSelections" type="integer" optional="true">Maximum number of items that can be selected</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the list/table control</param>
            /// <param name="totalAllowedSelections" type="integer" optional="true">Maximum number of items that can be selected</param>
            /// <param name="persistSelections" type="boolean" optional="true">Whether to persist selections for this session</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Make sure there is a contentItem
            if (contentItem != undefined && contentItem._view != null && contentItem._view._container != null) {

                // Make sure we have a properties location
                contentItem.lsWire = contentItem.lsWire || {};
                var lsw = contentItem.lsWire;

                // Setup our properties making it easier to work with selections
                var controlId = contentItem.model.view.id;
                lsw.controlClass = controlId === ":Table" ? ".msls-table tbody" : ".msls-listview";
                lsw.itemTagName = controlId === ":Table" ? "tr" : "li";
                lsw.lsWireSelectedClass = "lswire-selected-item";
                lsw.lsWireSelector = controlId === ":Table" ? "tbody tr.lswire-selected-item" : "ul li.lswire-selected-item";
                lsw.lsSelector = controlId === ":Table" ? "tbody tr.ui-btn-active" : "ul li.ui-btn-active";
                lsw.listView = contentItem._view._container[0].querySelector(lsw.controlClass);

                // Default our passed options
                lsw.totalSelectionsAllowed = totalSelectionsAllowed || null;

                // Look for an existing persistence setting... create our Id
                lsw.persistId = contentItem.screen.details._modelId + "_Persist" + contentItem.name + "Selections";

                // Do we have one set already?
                if (lsWire[lsw.persistId] === undefined) {
                    lsWire[lsw.persistId] = persistSelections == undefined
						                        ? false
						                        : persistSelections;
                }

                lsw.persistSelections = lsWire[lsw.persistId];

                // Setup our listener for item taps
                lsw.listView.addEventListener('click', clickHandler);

                // Now be a good citizen, destroy the handler when screen is destroyed
                contentItem.screen.details.pages[0].handleViewDispose(function () {

                    lsw.listView.removeEventListener('click', clickHandler);

                });

                // ============================================================================================
                // Internal - Meat of the functionality, pass the list contentItem and tapped item
                // ============================================================================================
                function clickHandler(event) {

                    // Get the container tag
                    var itemElement = lsWire.getParentByTagName(event.target, lsw.itemTagName);

                    // If no parent match, we are done
                    if (itemElement != undefined) {

                        // Don't allow default handling
                        event.stopPropagation();

                        // Execute our own itemTap
                        itemTap(contentItem, itemElement);

                        // Execute the users itemTap
                        if (contentItem._view.underlyingControl.itemTap != undefined)
                            contentItem._view.underlyingControl.itemTap.execute();
                    };
                };


            };


            // ============================================================================================
            // Internal - Meat of the functionality, pass the list contentItem and tapped item
            // ============================================================================================
            function itemTap(ci, item) {

                // *****************************************************************************************************
                // *****************************************************************************************************
                /// <summary>Enhance a list/table item tap to allow multi-item selection</summary>
                /// <param name="contentItem" type="object">Screen contentItem of the list/table control</param>
                /// <param name="totalSelectionsAllowed" type="integer">Optional<br />
                /// Maximum number of items that can be selected<br />
                /// Defaults to unlimited<br/>
                /// null or undefined will allow for unlimited selections.
                /// </param>
                // *****************************************************************************************************
                // *****************************************************************************************************

                // Get the hook into our data for this item
                var itemData = $.cache[item[$.expando]].data.__entity;

                // If number of selects is multiple, then go!
                if (lsw.totalSelectionsAllowed === null || lsw.totalSelectionsAllowed > 1) {

                    // If the selected item already was selected, unselect (nullify) the item
                    if (item.classList.contains(lsw.lsWireSelectedClass)) {

                        ci.screen[ci.name].selectedItem = null;
                        item.classList.remove(lsw.lsWireSelectedClass);
                        item.classList.remove('ui-focus');
                        if (lsw.persistSelections)
                            itemData[lsw.persistId] = false;

                        // If the tapped item does not have our custom class showing selected, add it
                    } else {

                        // Get the current count of selected items if we are showing a limit
                        var selectedCount = lsw.totalSelectionsAllowed == undefined
							                    ? 0
							                    : lsw.listView.querySelectorAll(lsw.lsWireSelector).length;

                        // If less than the total allowed add the class
                        if (lsw.totalSelectionsAllowed == undefined || selectedCount < lsw.totalSelectionsAllowed) {

                            ci.screen[ci.name].selectedItem = itemData;
                            item.classList.add(lsw.lsWireSelectedClass);
                            if (lsw.persistSelections)
                                itemData[lsw.persistId] = true;

                            // Already hit the limit, unselect this item
                        } else {

                            ci.screen[ci.name].selectedItem = null;
                            item.classList.remove('ui-focus');
                            if (lsw.persistSelections)
                                itemData[lsw.persistId] = false;
                        }
                    }

                    // Only 1 selection is allowed, so its more of a toggle, and no we are not going DRY
                } else {

                    // If the selected item already was selected, unselect (nullify) the item
                    if (item.classList.contains(lsw.lsWireSelectedClass)) {

                        ci.screen[ci.name].selectedItem = null;
                        item.classList.remove(lsw.lsWireSelectedClass);
                        item.classList.remove('ui-focus');
                        if (lsw.persistSelections)
                            itemData[lsw.persistId] = false;

                        // Not selected so remove any previous selection, and add to this one
                    } else {

                        var prevItem = listView.querySelector(lsw.lsWireSelector);
                        if (prevItem != undefined) {
                            prevItem.classList.remove(lsw.lsWireSelectedClass);
                            if (lsw.persistSelections)
                                itemData[lsw.persistId] = false;
                        }

                        item.classList.add(lsw.lsWireSelectedClass);
                        ci.screen[ci.name].selectedItem = itemData;
                        if (lsw.persistSelections)
                            itemData[lsw.persistId] = true;
                    }
                }


            };


        },

        reselectListItems: function (contentItem, force) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Reselect a previously selected item in a list. Typically used in the post render of a row, per item.
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">contentItem of the actual list/table item</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">contentItem of the actual list/table item</param>
            /// <param name="force" type="boolean" optional="true">If true, will select the item regardless of its previous state</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Make sure we have an item and our variables
            if (contentItem != undefined && contentItem.parent.lsWire !== undefined) {

                // Get our variables
                var lsw = contentItem.parent.lsWire;

                // If we are to persist selections and the item was previously selected
                //if ((lsw.persistSelections && contentItem.value.lsWireSelected) || force) {
                if ((lsw.persistSelections && contentItem.value[lsw.persistId]) || force) {

                    // Get the items container
                    var item = contentItem._view._container[0];

                    // We need the parent when dealing with lists
                    if (contentItem.parent.model.view.id !== ":Table")
                        item = item.parentElement;

                    // Add back our selected class
                    item.classList.add(lsw.lsWireSelectedClass);

                    // If force was passed and true, make sure we persist
                    if (force)
                        contentItem.value[lsw.persistId] = true;

                };
            };

        },

        getSelectedListItems: function (contentItem) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Get all the selected items from a list/table
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the the list/table</param>
            /// <returns type="array">An array of data entities</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Array to hold the data
            var data = [];

            if (contentItem != undefined && contentItem.lsWire !== undefined) {

                var lsw = contentItem.lsWire;

                // Get all the items that have our custom class signifying selection
                var selected = contentItem._view._container[0].querySelectorAll(lsw.lsWireSelector);

                // Go get the entity data for each selected item, add to the data array
                _.forEach(selected, function (item) {

                    // Get our data out of the jQuery cache
                    var entity = $.cache[item[$.expando]].data.__entity;
                    if (entity !== undefined)
                        data.push(entity);

                });
            }

            // Return our data array
            return data;

        },

        selectAllListItems: function (contentItem, yesNo) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Select all items in a list/table if unlimited selections are allowed
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the the list/table</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the the list/table</param>
            /// <param name="yesNo" type="boolean">true (default) Select all, false Unselect all</param> 
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem != undefined && contentItem.lsWire !== undefined) {

                var lsw = contentItem.lsWire;
                var allItems;

                // Default is to select all, false is passed to unselect
                if (yesNo === undefined || yesNo === true) {

                    if (lsw.totalSelectionsAllowed === undefined || lsw.totalSelectionsAllowed === null) {

                        // What is the control type... which drives how the items are created
                        var selector = contentItem.model.view.id === ":Table"
							               ? "tbody tr"
							               : "ul li";

                        // Get the listview container... then query for all items
                        allItems = contentItem._view._container[0].querySelectorAll(selector);

                        // Add our selected class to all the items
                        _.forEach(allItems, function (item) {

                            // If the item has not already been selected, add the class
                            if (!item.classList.contains(lsw.lsWireSelectedClass)) {
                                item.classList.add(lsw.lsWireSelectedClass);
                                if (lsw.persistSelections)
                                    $.cache[item[$.expando]].data.__entity[lsw.persistId] = true;

                            }
                        });
                    }
                } else {

                    // Get all the items that have our selected class
                    allItems = contentItem._view._container[0].querySelectorAll(lsw.lsWireSelector);

                    // Loop over them all and remove our class
                    _.forEach(allItems, function (item) {
                        item.classList.remove(lsw.lsWireSelectedClass);
                        item.classList.remove('ui-focus');
                        if (lsw.persistSelections)
                            $.cache[item[$.expando]].data.__entity[lsw.persistId] = false;
                    });

                    // Nullify the selected item property
                    contentItem.screen[contentItem.name].selectedItem = null;
                }

            }
        },

        countOfSelectedListItems: function (contentItem) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Get a count of how many items have been selected
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the the list/table</param>
            /// <returns type="integer">Count of the selected items</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var count = 0;

            if (contentItem != undefined && contentItem.lsWire !== undefined) {

                // Get the listview container... allowing independent lists on the same screen
                count = contentItem._view._container[0].querySelectorAll(contentItem.lsWire.lsWireSelector).length;

            }

            return count;

        },

        totalListSelectionsAllowed: function (contentItem, number) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Returns the total number of selections allowed
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the list/table</param>
            /// <returns type="integer">Number of selections allowed or null</returns>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the list/table</param>
            /// <param name="number" type="integer" optional="true">Number of allowed selctions. Pass a null or 0 to remove limits, undefined to retrieve</param>
            /// <returns type="integer">Number of selections allowed or null</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined) return null;

            contentItem.lsWire = contentItem.lsWire || {};

            // if no number, just return the value of
            if (number !== undefined) {

                contentItem.lsWire.totalSelectionsAllowed = number === null || number === 0
					                                            ? null
					                                            : number;
            }

            // Always return the count
            return contentItem.lsWire.totalSelectionsAllowed || null;
        },

        persistListSelections: function (contentItem, persist) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Get the flag of whether to persist selections for this session
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the list/table</param>
            /// <returns type="string">Id of the persist object</returns>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the list/table</param>
            /// <param name="persist" type="boolean" optional="true">Persist selections, undefined will retrieve the current settings</param>
            /// <returns type="string">Id of the persist object</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined) return null;

            contentItem.lsWire = contentItem.lsWire || {};
            var lsw = contentItem.lsWire;

            // What is our id for the cache
            var persistId = contentItem.screen.details._modelId + "_Persist" + contentItem.name + "Selections";

            if (persist !== undefined) {
                if (persist !== lsWire[persistId]) {
                    lsw.persistSelections = persist;
                    lsWire[persistId] = persist;
                    if (lsw.listView !== undefined)
                        updateSelected(contentItem, persist);
                }
            }

            // Simple, return any value if exists, undefined if not 
            return lsWire[persistId];

            // Update all selected items with persist
            function updateSelected(ci, persistSelection) {

                var allSelected = lsWire.list.selected(ci);

                _.forEach(allSelected, function (item) {
                    item[lsw.persistId] = persistSelection;
                });

            }

        },

        reorderTheList: function (contentItem, orderProperty) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Loop over a list and reset the defined displayOrder column
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">contentItem of the List</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">contentItem of the List</param>
            /// <param name="orderProperty" type="string" optional="true">Name of the property holding the sort order,defaults to DisplayOrder</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Make sure we have a contentItem and it has been rendered
            if (contentItem != undefined && contentItem._view != undefined) {

                // Grab the DOM list items, which actually hold our entities also
                var listItems = contentItem._view._contentContainer[0].getElementsByTagName("LI");

                // Make sure there is an order property
                orderProperty = orderProperty == undefined ? "DisplayOrder" : orderProperty;

                // Loop over the items
                for (var i = 0; i < listItems.length; i++) {

                    if (listItems[i] != undefined && $(listItems[i]).data().__entity != undefined) {

                        // Set the entity property to be the index, 1 based
                        $(listItems[i]).data().__entity[orderProperty] = i + 1;

                    }

                }
            }

        },

        changeListItemDisplayOrder: function (contentItem, item, increment, orderProperty) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Allowing a list item to move up or down the list
            /// </summary>
            /// <param name="contentItem" type="object" optiona="false">contentItem of the list</param>
            /// <param name="item" type="object" optional="false">Item in the list to use as start</param>
            /// <param name="increment" type="integer" optional="false">How far to increment the order number</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optiona="false">contentItem of the list</param>
            /// <param name="item" type="object" optional="false">Item in the list to use as start</param>
            /// <param name="increment" type="integer" optional="false">How far to increment the order number</param>
            /// <param name="orderProperty" type="string" optional="true">Name of the property holding the sort order,defaults to DisplayOrder</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem != undefined && contentItem.value != undefined && increment != undefined && item != undefined) {

                var list = contentItem.value;

                orderProperty = orderProperty == undefined ? "DisplayOrder" : orderProperty;

                // Loop over all the items in the list
                for (var i = 0; i < list.data.length; i++) {

                    // Get the list items Order number
                    var itemDisplayOrder = list.data[i][orderProperty];

                    // Is this the one we are swapping with?
                    if (itemDisplayOrder === item[orderProperty] + increment) {
                        list.data[i][orderProperty] = item[orderProperty];
                        item[orderProperty] = itemDisplayOrder;
                        return;
                    }

                }
            }

        },

        selectListItem: function (contentItem, id) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Function that will select a list item based on its ID
            /// </summary>
            /// <param name="contentItem" type="function" optional="false">contentItem for the list</param>
            /// <param name="id" type="number" optional="false">Id number of the item to select</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Make sure we have a contentItem and it has value
            if (contentItem != undefined && contentItem.value != undefined && id != undefined) {

                var value = contentItem.value;

                for (var i = 0; i < value.data.length; i++) {
                    if (value.data[i].Id === id) {
                        value.selectedItem = value.data[i];
                    }
                }
            }

        },

        renderCheckboxInCustomControl: function (contentItem, options) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Render a custom control as a checkbox
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the custom control</param>
            /// </signature>
            /// <signature>
            /// <summary>
            /// Render a custom control as a checkbox
            /// .
            /// Options: Optional that can be set for the checkbox: 
            ///  {text: Text you want to display to the right of the checkbox 
            /// textCssClass: CSS class you want to have the text displayed as 
            /// cssClass: Parent CSS class you want for the checkbox 
            /// onChange: UDF for when the control is clicked 
            /// initialValue: boolean} UDF gets passed 2 parameters: isChecked and the eventObect
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the custom control</param>
            /// <param name="options" type="object" optional="true">Set of properties to customize the checkbox</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined) return;

            // Make a spot for our data
            var modelId = contentItem.screen.details._modelId;

            // Get the container element
            var container = contentItem._view._container[0];

            contentItem.lsWire = contentItem.lsWire || {};
            contentItem.lsWire.checkbox = contentItem.lsWire.checkbox || {};

            // Shortcut to our data in the contentItem
            var ckBox = contentItem.lsWire.checkbox;

            // Stuff the passed options into our contentItem properties
            options = options || {};
            ckBox.cssClass = options.cssClass || "lswire-checkbox";
            ckBox.checkedCssClassForText = options.checkedCssClassForText;
            ckBox.uncheckedCssClassForText = options.uncheckedCssClassForText;
            ckBox.text = options.text;

            // Set the default value for the checkbox
            if (options.initialValue !== undefined) contentItem.value = options.initialValue;

            // Make sure we have a default change handler, we pass a boolean for checked/unchecked
            ckBox.onChange = options.onChange || function (isChecked) {
                if (contentItem.isEnabled)
                    contentItem.value = isChecked;
            };

            // Create a unique ID for our control, we don't consistently know the pageId until later, so we can't use that
            ckBox.controlId = modelId + "-" + contentItem.name;

            // We use the following to create our accompaning label/text, if any
            // 1. text property in passed options takes priority, pass an empty string for no label
            // 2. if no text property, look at the description field of the contentItem
            // 3. if no description text, use displayName, only if label position is None
            if (ckBox.text === undefined) {
                if (contentItem.description == undefined) {
                    ckBox.text = contentItem.properties.attachedLabelPosition == "None" ? contentItem.displayName : "&nbsp;";
                } else {
                    ckBox.text = contentItem.description;
                }
            }

            // Make sure we're all trimmed up
            ckBox.text = ckBox.text.trim();

            // Create the HTML for the Wrapper, Input and Label controls
            var $wrapper = $('<div class="msls-clear msls-vauto">');
            var $checkBoxInput = $('<input type="checkbox" id="' + ckBox.controlId + '" />');
            var $label = $('<label for="' + ckBox.controlId + '">' + ckBox.text + '</label>');

            // Add our checkbox and label to the container, then the container to the element
            $checkBoxInput.appendTo($wrapper);
            $label.appendTo($wrapper);
            $wrapper.appendTo(container);

            // Add the passed cssClass to the parent, else we use the default
            if (ckBox.cssClass) $(container).addClass(ckBox.cssClass);

            // if there is no text to display, tell the parent, make sure there is a space for the label, for sizing
            if (_.contains(contentItem.displayName, "&nbsp;")) {
                contentItem._view._container.find(".msls-label label").html("&nbsp;");
            } else if (ckBox.text == "") {
                $label[0].innerHTML = "&nbsp;";
                $(container).addClass("noLabelCheckbox");
            }

            // Make sure our events don't bubble up
            $checkBoxInput.on('click', function (eventObj) {
                eventObj.stopPropagation();
            });

            // Add the UDF to the change event of the checkbox, passed values: checked or not, event obj
            $checkBoxInput.change(function (eventObj) {
                ckBox.onChange($checkBoxInput[0].checked, eventObj);
            });

            // Now lets add the container to our contentItem for the ability to reference later
            ckBox.wrapper = $wrapper;


            // ============================================================================================
            // Make sure our styles get applied before the page is shown
            // ============================================================================================
            $(document).one('pagebeforeshow', function () {
                lsWire.updateCheckboxTextCssClasses(contentItem);
            });


            // ============================================================================================
            // Lets do a dataBind so the UI gets updated if underlying value changes
            // ============================================================================================
            contentItem.dataBind("value", function (isChecked) {

                if (isChecked !== undefined) {
                    // Stuff our HTML input control with the new value
                    $checkBoxInput[0].checked = isChecked;

                    // Make sure the control has been rendered, then refresh the UI
                    if (contentItem._view.isRendered) {
                        $checkBoxInput.checkboxradio("refresh");
                        lsWire.updateCheckboxTextCssClasses(contentItem);
                    }
                }

            });

        },

        updateCheckboxTextCssClasses: function (contentItem) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Change/Update the CSS class for the checkbox text
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the custom control</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined) return;

            // Shortcut to our data in the contentItem
            var ckBox = contentItem.lsWire.checkbox;

            // Do we have our text element, if not go find it, once
            if (ckBox.btnTextElement == undefined)
                ckBox.btnTextElement = $(ckBox.wrapper).parent().find(".ui-btn-text");

            // Update the text css as defined previously
            if (contentItem.value) {
                $(ckBox.btnTextElement).removeClass(ckBox.uncheckedCssClassForText);
                $(ckBox.btnTextElement).addClass(ckBox.checkedCssClassForText);
            } else {
                $(ckBox.btnTextElement).removeClass(ckBox.checkedCssClassForText);
                $(ckBox.btnTextElement).addClass(ckBox.uncheckedCssClassForText);
            }

        },

        setCheckboxText: function (contentItem, text, classToAdd, classToRemove) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Change the text and CSS Class of the checkbox
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the custom control</param>
            /// <param name="text" type="string" optional="false">Text you want to display</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the custom control</param>
            /// <param name="text" type="string" optional="false">Text you want to display</param>
            /// <param name="classToAdd" type="string" optional="true">Optional CSS class to add for the text</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the custom control</param>
            /// <param name="text" type="string" optional="false">Text you want to display</param>
            /// <param name="classToAdd" type="string" optional="true">Optional CSS class to add for the text</param>
            /// <param name="classToRemove" type="string" optional="true">Optional CSS class to remove from the text</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined || text == undefined) return;

            // Shortcut to our data
            var ckBox = contentItem.lsWire.checkbox;

            // Do we have our text element, if not go find it, once
            if (ckBox.btnTextElement == undefined)
                ckBox.btnTextElement = $(ckBox.wrapper).parent().find(".ui-btn-text");

            if (ckBox.btnTextElement.length > 0) {
                ckBox.btnTextElement[0].innerHTML = text;

                if (classToRemove)
                    $(ckBox.btnTextElement).removeClass(classToRemove);

                if (classToAdd)
                    $(ckBox.btnTextElement).addClass(classToAdd);
            }
        },

        addCssClassForCheckboxText: function (contentItem, cssClass) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Add a CSS class for the text
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the custom control</param>
            /// <param name="cssClass" type="string" optional="false">CSS class name</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined || cssClass == undefined) return;

            // Shortcut to our data
            var ckBox = contentItem.lsWire.checkbox;

            // Do we have our text element, if not go find it, once
            if (ckBox.btnTextElement == undefined)
                ckBox.btnTextElement = $(ckBox.wrapper).parent().find(".ui-btn-text");

            if (ckBox.btnTextElement.length > 0)
                $(ckBox.btnTextElement).addClass(cssClass);

        },

        removeCssClassForCheckboxText: function (contentItem, cssClass) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Remove a CSS class from the text
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">Screen contentItem of the custom control</param>
            /// <param name="cssClass" type="string" optional="false">CSS class name</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined || cssClass == undefined) return;

            // Shortcut to our data
            var ckBox = contentItem.lsWire.checkbox;

            // Do we have our text element, if not go find it, once
            if (ckBox.btnTextElement == undefined)
                ckBox.btnTextElement = $(ckBox.wrapper).parent().find(".ui-btn-text");

            if (ckBox.btnTextElement.length > 0)
                $(ckBox.btnTextElement).removeClass(cssClass);

        },

        initializeCheckboxCss: function (element, css) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initializes the checkbox styles
            /// </summary>
            /// <param name="element" type="object" optional="false">Element of the checkbox custom control</param>
            /// <param name="css" type="string" optional="false">CSS values (not classes) to be applied</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (element == undefined || css == undefined) return;

            $(document).one('pagebeforeshow', function () {
                $("div", element).css(css);
            });

        },

        disableCheckbox: function (contentItem, state) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Enable/Disable a checkbox
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">ContentItem for the checkbox</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">ContentItem for the checkbox</param>
            /// <param name="state" type="boolean" optional="true">Setting of false enables</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined) return;

            var element = contentItem._view._container[0].getElementsByTagName('input')[0];

            // State of false will enable
            if (state === undefined)
                state = true;

            element.disabled = state;
            element.parentNode.disabled = state;

            if (state)
                element.parentNode.classList.add('ui-disabled');
            else
                element.parentNode.classList.remove('ui-disabled');


        },

        renderCkEditorInTextArea: function (contentItem, customToolbar, dirtyProperty, options) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initialize a text area control as a Rich Text Editor using CkEditor
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">contentItem of the control</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">contentItem of the control</param>
            /// <param name="customToolbar" type="object" optional="true">Optional - Array of strings on which tools to include on the toolbar</param>
            /// <param name="dirtyProperty" type="object" optional="true">Optional - pass the screen property to set when the editor is dirty</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">contentItem of the control</param>
            /// <param name="customToolbar" type="object" optional="true">Optional - Array of strings on which tools to include on the toolbar</param>
            /// <param name="dirtyProperty" type="object" optional="true">Optional - pass the screen property to set when the editor is dirty</param>
            /// </signature>
            /// <signature>
            /// <summary>
            /// Initialize a text area control as a Rich Text Editor using CkEditor, works on a textArea control
            /// .
            /// Options: optional can be of the following
            /// dirtyButtonCssClass: which button will be used to show content has been edited
            /// disableCtrlS: disable the ctrl-s for saving
            /// readOnly: make the editor readonly
            /// fileBrowseUrl: url for the file browser
            /// fileBrowseWidth: width of the window for the file browser
            /// fileBrowseHeight: height of the window for the file browser
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">contentItem of the control</param>
            /// <param name="customToolbar" type="object" optional="true">Optional - Array of strings on which tools to include on the toolbar</param>
            /// <param name="dirtyProperty" type="object" optional="true">Optional - pass the screen property to set when the editor is dirty</param>
            /// <param name="options" type="object" optional="true">Optional - Set of additional options</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined) return;

            options = options == undefined ? {} : options;
            var dirtyButtonCssClass = options.dirtyButtonCssClass == undefined ? "lswire-dirty-editor-button" : options.dirtyButtonCssClass;
            var disableCtrlS = !!options.disableCtrlS;
            var readOnly = !!options.readOnly;
            var fileBrowseUrl = options.filebrowserBrowseUrl;
            var fileBrowseWidth = options.filebrowserWindowWidth;
            var fileBrowseHeight = options.filebrowserWindowHeight;


            // Wait for the our parent to get its dimensions
            contentItem.dataBind("_view.isRendered", function (isRendered) {

                if (isRendered) {

                    // Go find our text area
                    var txtArea = contentItem._view._contentContainer[0].getElementsByTagName('textarea')[0];

                    // If not found... quit
                    if (txtArea != undefined) {

                        // Parent has been setup, so initialize the editor
                        CKEDITOR.replace(txtArea.id, {
                            filebrowserBrowseUrl: fileBrowseUrl,
                            filebrowserWindowWidth: fileBrowseWidth,
                            filebrowserWindowHeight: fileBrowseHeight,
                            toolbar: customToolbar != undefined ? customToolbar : null,
                            readOnly: readOnly,
                            allowedContent: true,
                            on: {
                                save: function (e) {

                                    // If the save button is pressed, call our save function
                                    saveChanges(e.editor);

                                },
                                change: function (e) {

                                    if (!!e.editor.dirtyHasBeenSet == false) {
                                        e.editor.dirtyHasBeenSet = true;

                                        // If anything changes, set the passed property value for processing
                                        if (dirtyProperty != undefined)
                                            dirtyProperty.value = true;

                                        var saveButton = $(".cke_button__save", e.editor.container.$);
                                        if (saveButton != undefined)
                                            saveButton.addClass(dirtyButtonCssClass);
                                    }
                                },
                                instanceReady: function (e) {

                                    // Editor is ready... so lets now resize to our container
                                    setTimeout(function () {

                                        // Stuff the id of the editor into the contentItem
                                        contentItem.ckEditorId = txtArea.id;

                                        // Since the DOM has settled down, resize our editor to its desired state
                                        lsWire.resizeCkEditor(txtArea.id, null, e.sender.container.$.offsetWidth);

                                        // Since sometimes the DOM is flaky, we let the screen load, then force another resize, yep...HACK!
                                        setTimeout(function () {
                                            lsWire.resizeCkEditor(txtArea.id, null, e.sender.container.$.offsetWidth);
                                        }, 150);

                                    }, 250);

                                    // Bind for ctrl-s saving in the editor, Since the editor uses an iframe
                                    // the event binding will be destroyed when the iframe is destroyed, easy peasy!
                                    if (!disableCtrlS) {
                                        $(e.editor.window.$).bind('keydown', function (event) {
                                            if (event.ctrlKey || event.metaKey) {
                                                switch (String.fromCharCode(event.which).toLowerCase()) {
                                                    case 's':
                                                        // Call our save function
                                                        saveChanges(e.editor);
                                                        event.preventDefault();
                                                        break;
                                                }
                                            }
                                        });
                                    }
                                }
                            }
                        });

                        // Save changes in the editor to our contentItem
                        function saveChanges(editor) {
                            contentItem.value = editor.getData();
                            myapp.applyChanges().then(function () {
                                editor.resetDirty();

                                var saveButton = $(".cke_button__save", editor.container.$);
                                if (saveButton != undefined)
                                    saveButton.removeClass(dirtyButtonCssClass);

                                // If a dirty property was passed, set its value
                                if (dirtyProperty != undefined)
                                    dirtyProperty.value = false;

                                editor.dirtyHasBeenSet = false;
                            });
                        }
                    }
                }
            });


        },

        renderCkEditorInplace: function (contentItem, customToolbar, dirtyProperty, options) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initialize a text area control as a Rich Text Editor using CkEditor, works on a textArea control
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">contentItem of the control</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">contentItem of the control</param>
            /// <param name="customToolbar" type="object" optional="true">Optional - Array of strings on which tools to include on the toolbar</param>
            /// <param name="dirtyProperty" type="object" optional="true">Optional - pass the screen property to set when the editor is dirty</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">contentItem of the control</param>
            /// <param name="customToolbar" type="object" optional="true">Optional - Array of strings on which tools to include on the toolbar</param>
            /// <param name="dirtyProperty" type="object" optional="true">Optional - pass the screen property to set when the editor is dirty</param>
            /// </signature>
            /// <signature>
            /// <summary>
            /// Initialize a text area control as a Rich Text Editor using CkEditor, works on a textArea control
            /// .
            /// Options: optional can be of the following
            /// dirtyButtonCssClass: which button will be used to show content has been edited
            /// disableCtrlS: disable the ctrl-s for saving
            /// readOnly: make the editor readonly
            /// fileBrowseUrl: url for the file browser
            /// fileBrowseWidth: width of the window for the file browser
            /// fileBrowseHeight: height of the window for the file browser
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">contentItem of the control</param>
            /// <param name="customToolbar" type="object" optional="true">Optional - Array of strings on which tools to include on the toolbar</param>
            /// <param name="dirtyProperty" type="object" optional="true">Optional - pass the screen property to set when the editor is dirty</param>
            /// <param name="options" type="object" optional="true">Optional - Set of additional options</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************
            options = options == undefined ? {} : options;
            var dirtyButtonCssClass = options.dirtyButtonCssClass == undefined ? "lswire-dirty-editor-button" : options.dirtyButtonCssClass;
            //var disableCtrlS = !!options.disableCtrlS;
            var readOnly = !!options.readOnly;
            var fileBrowseUrl = options.filebrowserBrowseUrl;
            var fileBrowseWidth = options.filebrowserWindowWidth;
            var fileBrowseHeight = options.filebrowserWindowHeight;


            // Wait for the our parent to get its dimensions
            contentItem.dataBind("_view.isRendered", function (isRendered) {

                if (isRendered) {

                    // Go find our text area
                    var txtArea = contentItem._view._contentContainer[0].getElementsByTagName('textarea')[0];
                    $(txtArea).attr("contenteditable", "true");

                    // If not found... quit
                    if (txtArea != undefined) {

                        // Parent has been setup, so initialize the editor
                        CKEDITOR.inline(txtArea.id, {
                            filebrowserBrowseUrl: fileBrowseUrl,
                            filebrowserWindowWidth: fileBrowseWidth,
                            filebrowserWindowHeight: fileBrowseHeight,
                            toolbar: customToolbar != undefined ? customToolbar : null,
                            readOnly: readOnly,
                            allowedContent: true,
                            on: {
                                save: function (e) {

                                    // If the save button is pressed, call our save function
                                    saveChanges(e.editor);

                                },
                                change: function (e) {

                                    if (!!e.editor.dirtyHasBeenSet == false) {
                                        e.editor.dirtyHasBeenSet = true;

                                        // If anything changes, set the passed property value for processing
                                        if (dirtyProperty != undefined)
                                            dirtyProperty.value = true;

                                        var saveButton = $(".cke_button__save", e.editor.container.$);
                                        if (saveButton != undefined)
                                            saveButton.addClass(dirtyButtonCssClass);
                                    }
                                },
                                instanceReady: function (e) {

                                    // Editor is ready... so lets now resize to our container
                                    setTimeout(function () {

                                        // Stuff the id of the editor into the contentItem
                                        contentItem.ckEditorId = txtArea.id;

                                        // Since the DOM has settled down, resize our editor to its desired state
                                        lsWire.resizeCkEditor(txtArea.id, null, e.sender.container.$.offsetWidth);

                                        // Since sometimes the DOM is flaky, we let the screen load, then force another resize, yep...HACK!
                                        setTimeout(function () {
                                            lsWire.resizeCkEditor(txtArea.id, null, e.sender.container.$.offsetWidth);
                                        }, 150);

                                    }, 250);

                                }
                            }
                        });

                        // Save changes in the editor to our contentItem
                        function saveChanges(editor) {
                            contentItem.value = editor.getData();
                            myapp.applyChanges().then(function () {
                                editor.resetDirty();

                                var saveButton = $(".cke_button__save", editor.container.$);
                                if (saveButton != undefined)
                                    saveButton.removeClass(dirtyButtonCssClass);

                                // If a dirty property was passed, set its value
                                if (dirtyProperty != undefined)
                                    dirtyProperty.value = false;

                                editor.dirtyHasBeenSet = false;
                            });
                        }
                    }
                }
            });


        },

        resizeCkEditor: function (editorId, height, width) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Wrapper to easily resize the ckEditor to its container, typically its textarea
            /// </summary>
            /// <param name="editorId" type="string">The id of the editor, typically the id assigned to the textarea</param>
            /// </signature>
            /// <signature>
            /// <param name="editorId" type="string">The id of the editor, typically the id assigned to the textarea</param>
            /// <param name="height" type="integer" optional="true">Height for the entire editor</param>
            /// </signature>
            /// <signature>
            /// <param name="editorId" type="string">The id of the editor, typically the id assigned to the textarea</param>
            /// <param name="height" type="integer" optional="true">Height for the entire editor</param>
            /// <param name="width" type="integer" optional="true">Width for the entire editor</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (editorId != undefined) {

                // Get the editor
                var editor = CKEDITOR.instances[editorId];

                if (editor != undefined) {
                    if (height == undefined) {

                        var t1 = lsWire.getParentByClassName(editor.container.$, "msls-ctl-text-area").offsetTop;
                        var t2 = editor.element.$.parentElement.offsetTop;

                        var h1 = $(".msls-footer", ".ui-page-active").height();
                        var h2 = window.innerHeight;

                        height = (h2 - (t1 + t2 + h1)) - 15;

                    };

                    if (width == undefined) {
                        width = "100%";
                    }

                    $(editor.element.$.parentElement).height(height);

                    editor.resize(width, height);
                }
            };

        },

        destroyCkEditor: function (pageId, contentItemName) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Wrapper to destroy the ckEditor instance
            /// </summary>
            /// <param name="pageId" type="string" optional="false">Id of the page the editor is on</param>
            /// <param name="contentItemName" type="string" optional="false">Name of the contentItem the editor is rendered as</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Lets destroy the ckEditor for this screen
            if (pageId != undefined && contentItemName != undefined) {
                var editorId = pageId + "-" + contentItemName;
                if (CKEDITOR.instances[editorId] != undefined)
                    CKEDITOR.instances[editorId].destroy();
            }

        },

        getCkEditorData: function (contentItem) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Easily get the data out of the ckEditor instance associated with the passed contentItem
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">ContentItem that the editor is rendered as</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var editor = CKEDITOR.instances[contentItem.ckEditorId];
            contentItem.value = editor.getData();
        },

        renderKendoEditorInCustomControl: function (element, contentItem, customToolbar, styleSheets, insertHtml) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initialize a custom control as a Rich Text Editor using Kendo UI Editor
            /// </summary>
            /// <param name="element" type="object">DOM Element of the control</param>
            /// <param name="contentItem" type="object">contentItem of the control</param>
            /// </signature>
            /// <signature>
            /// <param name="element" type="object">DOM Element of the control</param>
            /// <param name="contentItem" type="object">contentItem of the control</param>
            /// <param name="customToolbar" type="object" optional="true">Optional - Array of strings on which tools to include on the toolbar</param>
            /// </signature>
            /// <signature>
            /// <param name="element" type="object">DOM Element of the control</param>
            /// <param name="contentItem" type="object">contentItem of the control</param>
            /// <param name="customToolbar" type="object" optional="true">Optional - Array of strings on which tools to include on the toolbar</param>
            /// <param name="styleSheets" type="string" optional="true">Optional = External style sheet to use within the editor</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (element == undefined || contentItem == undefined) return;

            var baseToolbar = [
				"bold", "italic", "underline",
				"justifyLeft", "justifyCenter", "justifyRight", "justifyFull",
				"insertUnorderedList", "insertOrderedList", "indent", "outdent",
				"createLink", "unlink", "insertImage",
				"createTable", "addRowAbove", "addRowBelow", "addColumnLeft", "addColumnRight", "deleteRow", "deleteColumn",
				"viewHtml",
                "insertHtml",
                "cleanFormatting",
				"foreColor",
				"backColor",
				"formatting",
				"fontName",
				"fontSize"
            ];

            var stylesheets = styleSheets == undefined ? [] : styleSheets;

            var toolbar = customToolbar != undefined ? customToolbar : baseToolbar;

            // Initialzie the kendo editor, easy peasy!
            var editor = $(element).kendoEditor({
                encoded: false,
                value: contentItem.value,
                tools: toolbar,
				insertHtml: insertHtml,
                stylesheets: stylesheets,
                change: function () {
                    contentItem.value = this.value();
                }
            }).data('kendoEditor');

            // Stuff the pointer to the editor into our contentItem
            contentItem.lsWire = contentItem.lsWire != undefined ? contentItem.lsWire : {};
            contentItem.lsWire.editor = editor;

        },

        renderKendoEditorInTextArea: function (element, contentItem, customToolbar, styleSheets) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initialize a text area control as a Rich Text Editor using Kendo UI Editor, works on a TextArea
            /// </summary>
            /// <param name="element" type="object">DOM Element of the control</param>
            /// <param name="contentItem" type="object">contentItem of the control</param>
            /// </signature>
            /// <signature>
            /// <param name="element" type="object">DOM Element of the control</param>
            /// <param name="contentItem" type="object">contentItem of the control</param>
            /// <param name="customToolbar" type="object" optional="true">Optional - Array of strings on which tools to include on the toolbar</param>
            /// </signature>
            /// <signature>
            /// <param name="element" type="object">DOM Element of the control</param>
            /// <param name="contentItem" type="object">contentItem of the control</param>
            /// <param name="customToolbar" type="object" optional="true">Optional - Array of strings on which tools to include on the toolbar</param>
            /// <param name="styleSheets" type="string" optional="true">Optional = External style sheet to use within the editor</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (element == undefined || contentItem == undefined) return;

            var baseToolbar = [
				"bold", "italic", "underline",
				"justifyLeft", "justifyCenter", "justifyRight", "justifyFull",
				"insertUnorderedList", "insertOrderedList", "indent", "outdent",
				"createLink", "unlink", "insertImage",
				"createTable", "addRowAbove", "addRowBelow", "addColumnLeft", "addColumnRight", "deleteRow", "deleteColumn",
				"viewHtml",
                "insertHtml",
                "cleanFormatting",
				"foreColor",
				"backColor",
				"formatting",
				"fontName",
				"fontSize"
            ];

            var toolbar = customToolbar != undefined ? customToolbar : baseToolbar;

            // Wait for mobile to finish up
            contentItem.dataBind("_view.isRendered", function (isRendered) {

                if (isRendered) {

                    lsWire.resizeTextAreaForKendoEditor(contentItem);

                    setTimeout(function () {

                        var stylesheets = styleSheets == undefined ? [] : styleSheets;

                        var editor = $("textarea", element).kendoEditor({
                            encoded: false,
                            tools: toolbar,
                            stylesheets: stylesheets,
                            insertHtml: [
                                { text: "JavaScript", value: "<pre><code class='language-javascript'>// Code Start... <br><br>// Code End </code></pre> " },
                                { text: "StyleSheet", value: "<pre><code class='language-css'>// Code Start<br><br>// Code End </code></pre> " },
                                { text: "C#", value: "<pre><code class='language-csharp'>// Code Start<br><br>// Code End </code></pre> " }
                            ],
                            value: contentItem.value,
                            change: function () {
                                contentItem.value = this.value();
                            },
                            keydown: function (event) {

                                // Bind for ctrl-s saving in the editor, Since the editor uses an iframe
                                // the event binding will be destroyed when the iframe is destroyed, easy peasy!
                                if (true) {
                                    if (event.ctrlKey || event.metaKey) {
                                        switch (String.fromCharCode(event.which).toLowerCase()) {
                                            case 's':
                                                // Call our save function
                                                event.preventDefault();
                                                contentItem.value = this.value();
                                                myapp.applyChanges().then(function () {
                                                    toastr.success('Page has been saved');
                                                });
                                                break;
                                        }
                                    }
                                }

                            }
                        }).data('kendoEditor');

                        // Stuff the pointer to the editor into our contentItem
                        contentItem.lsWire = contentItem.lsWire != undefined ? contentItem.lsWire : {};
                        contentItem.lsWire.editor = editor;

                    }, 0);
                }

            });

        },

        resizeKendoEditorTextAreaHeight: function (contentItem) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Wrapper to resize the height for the kendo editor.  Typically call this after the DOM has settled.
            /// This is not the same as resizing the textarea.
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">The contentItem that the control was rendered for</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            lsWire.shell.finishNavigation().then(function () {

                if (contentItem == undefined) return;

                var editor = contentItem.lsWire.editor;
                var screenId = "#" + contentItem.screen.details._pageId;
                var viewPortHeight = document.documentElement.clientHeight;
                var headerHeight = $(".msls-header", screenId).outerHeight();
                var footerHeight = $(".msls-footer", screenId).outerHeight();

                var controlId = screenId + "-" + contentItem.name;
                var textArea = $(controlId);
                var ctrl = textArea.closest(".msls-ctl-text-area");
                var label = ctrl.find(".msls-label");
                var toolbarHeight = $('.k-editor-toolbar-wrap').height();
                var wrapper;

                // If this is an inline editor, things change
                if (editor.element.hasClass("k-editor-inline")) {
                    ctrl = editor.element;
                    label = editor.element.siblings('.msls-label');
                    toolbarHeight = 0;
                    wrapper = ctrl;
                } else {
                    wrapper = editor.wrapper;
                }

                var availableHeight = viewPortHeight - headerHeight - footerHeight;

                // Inner before the textarea
                var labelHeight = contentItem.properties.attachedLabelPosition == "None"
					|| contentItem.properties.attachedLabelPosition == "Hidden" ? 15 : label.outerHeight() + 25;

                var containerHeight = contentItem._view._container.position().top;
                var wrapperTop = $(wrapper).position().top;

                var newHeight = viewPortHeight - footerHeight - containerHeight - toolbarHeight - wrapperTop - 25;

                $(wrapper).height(newHeight);

                $(ctrl)[0].classList.remove("msls-redraw");
                $(ctrl).css("height", "");
                $(ctrl).find('.msls-presenter-content').css("height", "");
                $(ctrl).closest('.msls-tab-content').css("height", "");

            });

        },

        resizeKendoEditorCustomControlHeight: function (contentItem) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Wrapper to resize the height for the kendo editor when configured as an inline editor.  
            /// Typically call this after the DOM has settled.
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">The contentItem that the control was rendered for</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            lsWire.shell.finishNavigation().then(function () {

                if (contentItem == undefined) return;

                var screenId = "#" + contentItem.screen.details._pageId;
                var editor = contentItem.lsWire.editor;
                var viewPortHeight = document.documentElement.clientHeight;
                var headerHeight = $(".msls-header", screenId).outerHeight();
                var footerHeight = $(".msls-footer", screenId).outerHeight();

                var ctrl = editor.element;
                var label = editor.element.siblings('.msls-label');

                var availableHeight = viewPortHeight - headerHeight - footerHeight;

                // Inner before the textarea
                var labelHeight = contentItem.properties.attachedLabelPosition == "None"
					|| contentItem.properties.attachedLabelPosition == "Hidden" ? 15 : label.outerHeight() + 25;

                var editorOffset = editor.body.offsetParent.offsetTop + editor.body.offsetTop;

                editorHeight = (viewPortHeight - footerHeight - editorOffset - 25) + "px";

                ctrl[0].style.height = editorHeight;
                ctrl[0].style.maxHeight = editorHeight;

                ctrl[0].classList.remove("msls-vauto");
                ctrl[0].classList.add("msls-vscroll");

                // Remove the scrollbars around the screen
                $(ctrl).closest(".msls-content").height(availableHeight);
                $(ctrl).closest(".msls-tab-content").height(availableHeight);

            });

        },

        renderTinyMCEInTextArea: function (element, contentItem, customToolbar) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initialize a text area control as a Rich Text Editor using TinyMCE, works on a textArea control
            /// </summary>
            /// <param name="element" type="object" optional="false">DOM Element of the control</param>
            /// <param name="contentItem" type="object" optional="false">contentItem of the control</param>
            /// </signature>
            /// <signature>
            /// <param name="element" type="object" optional="false">DOM Element of the control</param>
            /// <param name="contentItem" type="object" optional="false">contentItem of the control</param>
            /// <param name="customToolbar" type="object" optional="true">Optional - Space seperated list of strings on which tools to include on the toolbar</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (element == undefined || contentItem == undefined) return;

            // Wait for the our parent to get its dimensions
            lsWire.onceElementAttrChange(element, "height", function () {

                // Get our text area, add a custom css class for our selector
                var txtArea = element.getElementsByTagName('textarea')[0];
                var mceClass = "tinymce_" + txtArea.id;
                txtArea.classList.add(mceClass);

                var toolbar = customToolbar != undefined ? customToolbar : "insertfile undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image";

                // Go initialize the editor on this text area
                tinymce.init({
                    selector: 'textarea.' + mceClass,
                    plugins: [
						"advlist autolink lists link image charmap print preview anchor",
						"searchreplace visualblocks code fullscreen",
						"insertdatetime media table contextmenu paste moxiemanager"
                    ],
                    toolbar: toolbar,
                    height: txtArea.parentElement.offsetHeight * parseInt(element.style.maxHeight) / 100,
                    setup: function (editor) {

                        // When user leaves the editor
                        editor.on('blur', function (e) {

                            // Did they do any edits?  If so, save to our contentItem
                            if (e.target.isDirty()) {
                                contentItem.value = e.target.getContent();
                            }

                        });

                        // Stuff the pointer to the editor into our contentItem
                        contentItem.lsWire = contentItem.lsWire != undefined ? contentItem.lsWire : {};
                        contentItem.lsWire.editor = editor;

                    }
                });

            });

        },

        clearDetailsPicker: function (contentItem) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Clear (nullify) a details picker.  LightSwitch does not handle this well in code so we fixed it.
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">contentItem of the picker</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem != undefined && contentItem._view != undefined) {
                $("input", contentItem._view._container[0]).val(null);
                contentItem.value = null;
            }

        },

        cleanDetailsPicker: function (contentItem) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Clean a details picker html element, when you nullify it, for whatever reason Ls doesnt do this
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">contentItem of the picker</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem != undefined && contentItem._view != undefined) {

                if (contentItem.value == null) {
                    $("input", contentItem._view._container[0]).val(null);
                }
            }

        },

        enableDetailsPickerView: function (contentItem, screenMethod) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Enable the search icon to be used to call a custom method, like show a view screen of the item
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">contentItem of the picker</param>
            /// <param name="screenMethod" type="object" optional="false">Method to be called with the items value</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            setTimeout(function () {
                $(".ui-icon-searchfield", contentItem._view._container[0]).css("cursor", "pointer").on('click', function (e) {
                    e.preventDefault();
                    if (e.target.nodeName != "INPUT" && contentItem.value != undefined) {
                        myapp[screenMethod](contentItem.value);
                    }
                });
            });

        },

        initializeValidator: function (options) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Set up a validator {contentItem, controlName, method}
            /// </summary>
            /// <param name="options">Object of properties</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Get the contentItem
            var contentItem = options.tab.findItem(options.controlName);

            // Bind to the isChanged property, only fires if data was changed
            contentItem.dataBind('value', function () {

                // If its screen start or data changed, fire our method, else skip
                options.method(contentItem);
            });

        },

        setValidationError: function (contentItem, validationPassed, validationMessage) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Set/Remove validation error on a contentItem
            /// </summary>
            /// <param name="contentItem" optional="false">contentItem to set/remove the error</param>
            /// <param name="validationPassed" type="boolean" optional="false">true/false</param>
            /// <param name="validationMessage" type="string" optional="false">Text to display for the error</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined || validationPassed == undefined) return;

            // See if our tabs exist
            var screen = contentItem.screen;
            var tab = lsWire.getContentItemTab(contentItem);
            var tabName = tab.data.name;

            if (!validationPassed) {
                contentItem.validationResults = [
					new msls.ValidationResult(contentItem.details, validationMessage)
                ];

            } else {

                contentItem.validationResults = null;

            }

            // Lets go see if we need to change change our tab header
            //if (setTabError !== false)
            lsWire.setTabValidationError(tabName, screen);

        },

        renderEmbedInCustomControl: function (contentItem, height) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Render an Embed within a custom control
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">Custom control contentItem</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">Custom control contentItem</param>
            /// <param name="height" type="number" optional="true">Optional: height to set the video element for mp4 only</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined) return;

            contentItem.dataBind("value", function (embedCode) {


                if (embedCode != undefined) {
                    var embedId = "embed_" + lsWire.createUid();
                    var embedContainerId = "embedContainer" + "_" + embedId;
                    var element = contentItem._view._contentContainer;

                    if (element[0].id == "")
                        $(element).attr("id", embedContainerId);

                    switch (lsWire.getEmbedType(embedCode)) {
                        case "iframe":

                            // Create our iframe element
                            var iframe = $(embedCode);
                            $(iframe).attr("id", embedId);

                            // Add the fix for the zIndex issue
                            $(iframe).on("load", null, null, function () {
                                lsWire.fixzIndexAfterEmbedRender();
                            });

                            if (contentItem.embedId == undefined) {
                                $(element).append(iframe);
                            } else {
                                $("#" + contentItem.embedId).replaceWith(iframe);
                            }
                            contentItem.embedId = embedId;

                            break;

                        case "mp4":

                            // Do we already have a player?
                            if (contentItem.embedId == undefined) {
                                // Create our video element
                                // Is there a height set
                                var videoPlayer = $('<video controls><source type="video/mp4" src="' + embedCode + '"></video>');
                                $(videoPlayer).attr("id", embedId);
                                contentItem.embedId = embedId;

                                if (height != undefined && height > 0) {
                                    $(videoPlayer).height(height).width(height * 1.78);
                                }

                                $(element).append(videoPlayer);
                            }

                            break;

                        default:
                    }
                }
            });

        },

        fixzIndexAfterEmbedRender: function () {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Fix zIndexing after an embedded iframe gets rendered, typically call from the iframes onload handler.
            /// for example:  <iframe onload="fixzIndexAfterEmbedRender()"></iframe>
            /// </summary>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Lets use time as our randomizer
            var dt = new Date();

            return;

            // Make sure the frame has been rendered
            setTimeout(function () {

                // Reset the zIndex of all content and footers, quite a hack to get it to work
                $(".msls-content").css("z-index", 10100 + dt.getMinutes() + dt.getSeconds());
                $(".msls-footer").css("z-index", 10200 + dt.getMinutes() + dt.getSeconds());

                // Lets do it again
                setTimeout(function () {
                    // Reset the zIndex of all content and footers, quite a hack to get it to work
                    $(".msls-content").css("z-index", 10100 + dt.getMinutes() + dt.getSeconds());
                    $(".msls-footer").css("z-index", 10200 + dt.getMinutes() + dt.getSeconds());
                }, 200);

            }, 200);

        },

        resizeEmbed: function (contentItem, height, multiplier) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Resize an embedded item
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">contentItem that is doing the rendering of the embedded item</param>
            /// <param name="height" type="integer" optional="false">New height to render as</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">contentItem that is doing the rendering of the embedded item</param>
            /// <param name="height" type="integer" optional="false">New height to render as</param>
            /// <param name="multiplier" type="float" optional="true">The aspect ratio that will muliply with height to get the width</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined || height == undefined) return;

            var embedCode = contentItem.value;

            switch (lsWire.getEmbedType(embedCode)) {

                // iframe and youtube are the same
                case "iframe":

                    var oldEmbedCode = $(embedCode);

                    // Only rezise if we have a multiplier, else just render the embed code
                    if (multiplier != undefined) {

                        // Now go and adjust the height/width keeping the correct aspect ratio
                        var oldHeight = oldEmbedCode[0].height;

                        if (height != oldHeight) {
                            var width = height * multiplier;
                            var oldWidth = oldEmbedCode[0].width;

                            oldEmbedCode[0].height = height;
                            oldEmbedCode[0].width = width;
                            oldEmbedCode[0].style.height = height + "px";
                            oldEmbedCode[0].style.width = width + "px";

                            // Need to check the source for hidden item variables for height/width
                            // Channel 9 has this problem
                            var src = oldEmbedCode[0].src.split('?');

                            if (src.length > 1) {
                                src[1] = src[1].replace(oldHeight, height).replace(oldWidth, width);
                                oldEmbedCode[0].src = src[0] + "?" + src[1];
                            }
                            contentItem.value = oldEmbedCode[0].outerHTML;
                        }
                    }

                    break;

                case "mp4":

                    // HTML 5 will keep the aspect, so no calculation neeeded
                    if (contentItem.embedId != undefined) {
                        $("#" + contentItem.embedId).height(height).width(height * 1.78);
                    }

                    break;

                default:
            }

        },

        getEmbedAspectMultiplier: function (embedCode) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Find the current Aspect multiplier (ratio) from the passed embed code
            /// </summary>
            /// <param name="embedCode" type="string" optional="false">Code to embed the item, ie: iframe</param>
            /// <returns type="float">The multiplier that is used to calculate width</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Default to standard
            var multiplier = 1.78;

            if (embedCode != undefined && lsWire.getEmbedType(embedCode) == "iframe") {

                var tempElement = $(embedCode);
                var attrWidth = $(tempElement).width();
                var attrHeight = $(tempElement).height();
                var styleWidth = $(tempElement).css("width").replace("px", "");
                var styleHeight = $(tempElement).css("height").replace("px", "");

                var iWidth = attrWidth == styleWidth ? attrWidth : parseInt(styleWidth);
                var iHeight = attrHeight == styleHeight ? attrHeight : parseInt(styleHeight);

                multiplier = iWidth / iHeight;
            }

            return parseFloat(multiplier.toFixed(8));

        },

        openEmbedInWindow: function (embedCode) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Wrapper to use within a buttons custom method to open an embed in a separate tab/window in full screen
            /// </summary>
            /// <param name="embedCode" type="string" optional="false">Embed code that we will parse</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (embedCode == undefined) return;

            switch (lsWire.getEmbedType(embedCode)) {
                case "iframe":

                    // Get the source from the embed code
                    var source = $(embedCode).attr("src");

                    // is this youtube, change the embed to full window display
                    if (_.contains(source, "youtube") && _.contains(source, "embed")) {
                        source = source.replace("embed", "v");
                    }

                    // Now open up a new window/tab
                    window.open(source);
                    break;

                case "mp4":
                    window.open(embedCode);
                    break;

                default:
            }


        },

        destroyEmbed: function (contentItem) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Wrapper to destroy the embedded item, typically use before you navigate from the screen
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">Custom controls contentItem that housed the embedded item</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined) return;

            var embedCode = contentItem.value;

            switch (lsWire.getEmbedType(embedCode)) {
                case "iframe":
                    var view = contentItem._view._container;
                    $(view).remove("iframe");
                    break;

                case "mp4":
                    break;

                default:
            }

        },

        getEmbedType: function (embedCode) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// What type of code is this, iframe?  mp4 url?
            /// </summary>
            /// <param name="embedCode" type="string" optional="false">Actual embed code to parse</param>
            /// <returns type="string">iframe/mp4 at this stage, more to come</returns>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            var typeOfEmbed = null;

            if (embedCode != undefined) {
                var testCode = embedCode.toLowerCase();
                if (_.contains(testCode, "iframe")) typeOfEmbed = "iframe";
                if (typeOfEmbed == undefined && _.contains(testCode, "mp4")) typeOfEmbed = "mp4";
            }

            return typeOfEmbed;

        },

        enableListToBeSortable: function (contentItem, callBack) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Initialize a list to be sortable by dragging/dropping, downside is, if other than list items are dragged
            /// the entire list is dragged.  Also need to be aware of the length of the list and if it can scroll
            /// </summary>
            /// <param name="contentItem" type="object" optional="false">contentItem of the list</param>
            /// </signature>
            /// <signature>
            /// <param name="contentItem" type="object" optional="false">contentItem of the list</param>
            /// <param name="callBack" type="function" optional="true">Function to execute when an item is dropped</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (contentItem == undefined) return;

            // Make sure the visual has been loaded
            contentItem.dataBind("_visualState", function (state) {

                if (state != "loading") {
                    // Get the element/container for the list
                    var element = contentItem._view._container[0];

                    // Set the list and items as sortable along with draggable for touch
                    $("ul", element).sortable({
                        update: function (e, f) {

                            // Call the users function after an item is dropped
                            if (callBack != undefined)
                                callBack($(f.item).data().__entity);

                        }
                    }).draggable();

                }
            });

        },

        toggleSearchInput: function (queryName, maxWidth) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Toggle the search input to be shown or hidden
            /// </summary>
            /// <param name="screenQuery" type="object" optional="false">The screen query object we will be searching thru</param>
            /// </signature>
            /// <signature>
            /// <param name="screenQuery" type="object" optional="false">The screen query object we will be searching thru</param>
            /// <param name="maxWidth" type="string" optional="true">CSS setting for the maximum width of the input element
            /// ... defaults to be the width of the list items.  Format: "300px" </param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            if (queryName == undefined) return;

            // Make sure we have a query object
            var screenQuery = lsWire.getActiveScreen()[queryName];

            if (screenQuery != undefined && typeof (screenQuery) == "object" && screenQuery["enableSearch"] != undefined) {

                // Get the search control for this screen
                var searchControl = $(".msls-control-search", ".ui-page-active");

                if (searchControl != undefined) {
                    // If a width was passed, use it, else the list item width
                    maxWidth = maxWidth != undefined
			            ? maxWidth
			            : $(".msls-listview", '.ui-page-active').find("li.ui-first-child").outerWidth();

                    // Set the max width of the input element
                    if (searchControl.css("max-width") != maxWidth)
                        searchControl.css("max-width", maxWidth);

                    // Now toggle the input to be hidden/visible
                    if (screenQuery.enableSearch) {
                        searchControl.find('input').blur();
                        $(".ui-page-active").focus();
                    }

                    screenQuery.enableSearch = !screenQuery.enableSearch;
                }
            }
        },

        renderFileSelectorInCustomControl: function (element, contentItem, acceptableTypes, callBack) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <signature>
            /// <summary>
            /// Renders a file input in a custom control, for adding files to a table/upload
            /// </summary>
            /// <param name="element" type="HTMLElement" optional="false">Element of the custom control</param>
            /// <param name="contentItem" type="object" optional="false">ContentItem of the custom control</param>
            /// </signature>
            /// <signature>
            /// <param name="element" type="HTMLElement" optional="false">Element of the custom control</param>
            /// <param name="contentItem" type="object" optional="false">ContentItem of the custom control</param>
            /// <param name="acceptableTypes" type="string" optional="true">List of file types allowed for selection</param>
            /// </signature>
            /// <signature>
            /// <param name="element" type="HTMLElement" optional="false">Element of the custom control</param>
            /// <param name="contentItem" type="object" optional="false">ContentItem of the custom control</param>
            /// <param name="acceptableTypes" type="string" optional="true">List of file types allowed for selection</param>
            /// <param name="callBack" type="function" optional="true">Function to execute after file is selected, passing the file object</param>
            /// </signature>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // Create our input for file selection and append it to our container
            var fileInput = $('<input name="file" accept="' + acceptableTypes + '" type="file" style="margin-bottom: 10px;" />');
            $(element).append(fileInput);

            // Add an onchange handler for file selection
            fileInput.bind('change', function onInputChange(event) {

                var files = event.target.files;
                if (files.length == 1) {

                    // We have a file selected, so create our reader
                    var reader = new FileReader();

                    // Add a handler for when the data has been loaded successfully
                    reader.onload = function (e) {

                        // Get the raw data that was loaded
                        var splitData;
                        var loadedData = e.target.result;

                        // If its empty, set our contentItem value to null also
                        if (lsWire.isEmpty(loadedData)) {
                            contentItem.value = null;
                        } else {

                            // We have data, so lets split it into data type and data
                            splitData = loadedData.split(',');
                            if (splitData.length > 1) {

                                // If we in fact have data, add it to the contentItem
                                contentItem.value = loadedData.split(',')[splitData.length - 1];
                            }
                        }

                        // Call the users passed method if there is one, with the files object we worked on
                        if (callBack != undefined) {
                            callBack(files[0]);
                        }

                    };

                    // Now that all has been setup for reading, go and attempt to read the file
                    reader.readAsDataURL(files[0]);

                } else {

                    // We did not work on any file, so just call the users method, no parameters
                    callBack();
                }


            });
        }

        // #endregion

    };


    window.lsWire.sharePoint = {

        showUploadWindow: function (options) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <summary>
            /// Show a KendoUI window to upload files to SharePoint
            /// </summary>
            /// <param name="options" type="object">Object of properties</param>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // getListUrl is a "GET"
            // removeUrl is a "POST"
            // saveUrl is a "POST"

            // If basic requirements are not met, gracefully return
            if (options == undefined || options.recordId == undefined || options.getListUrl == undefined || options.saveUrl == undefined || options.removeUrl == undefined)
                return;

            if (options.title == undefined) options.title = "File Upload";
            if (options.width == undefined) options.width = 400;
            if (options.top == undefined) options.top = 20;
            if (options.left == undefined) options.left = 20;
            if (options.autoUpload == undefined) options.autoUpload = true;
            if (options.baseControlName == undefined) options.baseControlName = "kFileUpload";
            if (options.fileList == undefined) options.fileList = [];

            // Wrap it all within a screen show progress
            msls.showProgress(
				msls.promiseOperation(function (operation) {

				    // Go get the list of attachments for this LightSwitch record
				    $.ajax({
				        type: "GET",
				        async: true,
				        url: options.getListUrl + "/" + options.recordId,
				        success: function (results) {

				            // Success... get the file list if there, else its a null array
				            operation.complete(results.FileList);
				        },
				        error: function (results) {

				            // Error, so pass the error out of the promise
				            operation.error(results);
				        }
				    });

				}).then(function (fileList) {

				    // If there was a list of existing files, add it to our options
				    if (fileList != undefined)
				        options.fileList = fileList;

				    // We were successful, so create the upload window
				    lsWire.sharePoint.createUploadWindow(options);

				    // Now create the actual upload widget within the window
				    lsWire.sharePoint.createUploadWidget(options);

				    // Window and upload control have been created, so now show them!
				    $("#" + options.baseControlName + "Window").data("kendoWindow").open();

				})
			);


        },

        createUploadWindow: function (options) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <summary>
            /// Create a kendoWindow to house our upload control
            /// </summary>
            /// <param name="options" type="object">Object of properties</param>
            // *****************************************************************************************************
            // *****************************************************************************************************


            // Name our window for access later
            var windowName = options.baseControlName + "Window";
            var widgetName = options.baseControlName + "Widget";

            // Look for an upload control
            var kUpload = document.getElementById(widgetName);

            // If its there, destroy it
            if (kUpload != undefined)
                $(kUpload).data("kendoUpload").destroy();

            // Look for an existing window in the DOM
            var kWindow = document.getElementById(windowName);

            // If its there, destroy it also, cleans up memory issues
            if (kWindow != undefined)
                $(kWindow).data("kendoWindow").destroy();

            // Create/ReCreate an element for our new window
            var div = document.createElement("div");
            div.id = windowName;
            document.body.appendChild(div);

            // Finally, initialize the window control, initially hidden
            $("#" + windowName).kendoWindow({
                title: options.title,
                width: options.width,
                visible: false,
                position: {
                    top: options.top,
                    left: options.left
                }
            });

        },

        createUploadWidget: function (options) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <summary>
            /// Create the upload widget, enclosed in a kendoWindow
            /// </summary>
            /// <param name="options">Object of properties</param>
            // *****************************************************************************************************
            // *****************************************************************************************************

            // What are the names of our controls
            var windowName = options.baseControlName + "Window";
            var widgetName = options.baseControlName + "Widget";

            // Create an element for our upload widget
            var input = document.createElement("input");
            input.setAttribute("type", "file");
            input.id = widgetName;
            input.setAttribute("name", widgetName);

            // Add the upload widget to the window
            document.getElementById(windowName).appendChild(input);

            // Initialize the upload widget
            $("#" + widgetName).kendoUpload({
                async: {
                    saveUrl: options.saveUrl + options.recordId,
                    removeUrl: options.removeUrl + options.recordId,
                    autoUpload: options.autoUpload
                },
                files: options.fileList,
                multiple: false,
                remove: function (eObj) {
                    eObj.sender.options.async.removeUrl = options.removeUrl + options.recordId + "/" + eObj.files[0].name;
                },
                error: function (eObj) {

                    if (eObj.XMLHttpRequest.status == 500) {
                        var msg = "Error uploading " + eObj.files.length + " files";
                        msg += "\n\n" + eObj.XMLHttpRequest.responseText;
                        alert(msg);
                    }

                }
            });
        },

        listItemAttachments: function (options) {

            // *****************************************************************************************************
            // *****************************************************************************************************
            /// <summary>
            /// Retrieve information on the attachments associated with a list item
            /// </summary>
            /// <param name="options">Object of properties</param>
            // *****************************************************************************************************
            // *****************************************************************************************************

            return msls.promiseOperation(function (operation) {

                if (options == undefined || options.url == undefined || options.lsId == undefined)
                    operation.error({ errorText: "Invalid parameters" });
                else

                    $.ajax({
                        type: "GET",
                        async: true,
                        url: options.url + options.lsId,
                        success: function (results) {

                            if (results != undefined && results.FileList != undefined && results.FileList.length > 0) {

                                _.forEach(results.FileList, function (file) {

                                    file.sizeString = (file.size > 1048576) ?
									(file.size / Math.pow(1024, 2)).toFixed(1) + " mb" :
									(file.size / 1024).toFixed(1) + " kb";

                                });
                            }

                            operation.complete(results);

                        },
                        error: function (results) {

                            operation.error(results);
                        }
                    });

            });

        }

    };

})();