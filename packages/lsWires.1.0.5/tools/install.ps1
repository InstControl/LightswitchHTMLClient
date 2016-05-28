param($installPath, $toolsPath, $package, $project)

# Get the server project, install the server package
Get-Project *.Server | Install-Package lsWiresServer


# Get our default.htm file to update
$projectPath = split-path $project.FullName
$fileName = "$projectPath\default.htm"

# Only proceed if there is a file
if (Test-Path $fileName) {

    [xml]$xmlContents = Get-Content -Path $fileName
    
    # Lets start with CSS
    $xmlRoot = $xmlContents.DocumentElement.Head
    $insertBeforeElement = $xmlContents.GetElementsByTagName("link") | Where { ($_.href).contains("user-customization.css") } 
    
    # Create our two new css links to add
    
    # Does the lsWires css already exist?
    if ( -not ($xmlContents.GetElementsByTagName("link") | Where { ($_.href).contains("lsWires.css") })) {
        $newCss1 = $xmlContents.createElement("link")
        $newCss1.setAttribute("href", "lsWires/lsWires.css")
        $newCss1.setAttribute("type", "text/css")
        $newCss1.setAttribute("rel", "stylesheet")
    
        $xmlRoot.insertBefore($newCss1, $insertBeforeElement)
    }
    
    if ( -not ($xmlContents.GetElementsByTagName("link") | Where { ($_.href).contains("lsWiresTheme-light.css") })) {
        $newCss2 = $xmlContents.createElement("link")
        $newCss2.setAttribute("href", "lsWires/lsWiresTheme-light.css")
        $newCss2.setAttribute("type", "text/css")
        $newCss2.setAttribute("rel", "stylesheet")
        
        $xmlRoot.insertBefore($newCss2, $insertBeforeElement)
    }
    
    # Make sure our user-customization link is updated
    $insertBeforeElement.setAttribute("id", "dynamicCss")
    $insertBeforeElement.setAttribute("title", "dynamicCss")
    
    
    # Lets do our scripts now
    $xmlRoot = $xmlContents.DocumentElement.Body
    $insertAfterElement = $xmlContents.GetElementsByTagName("script") | Where { ($_.src -and ($_.src).contains("generatedAssets.js")) }
    
    if ( -not ($xmlContents.GetElementsByTagName("script") | Where { ($_.src) -and ($_.src).contains("lsWires.js") } )) {
        $newJs3 = $xmlContents.createElement("script")
        $newJs3.setAttribute("src", "lsWires/lsWires.js")
        $newJs3.setAttribute("type", "text/javascript")
        $newJs3.InnerText = ''
    
        $xmlRoot.insertAfter($newJs3, $insertAfterElement)
    }
    
    if ( -not ($xmlContents.GetElementsByTagName("script") | Where { ($_.src) -and ($_.src).contains("moment.min.js") } )) {
        $newJs2 = $xmlContents.createElement("script")
        $newJs2.setAttribute("src", "scripts/moment.min.js")
        $newJs2.setAttribute("type", "text/javascript")
        $newJs2.InnerText = ''
    
        $xmlRoot.insertAfter($newJs2, $insertAfterElement)
    }
    
    if ( -not ($xmlContents.GetElementsByTagName("script") | Where { ($_.src) -and ($_.src).contains("lodash.min.js") } )) {
        $newJs1 = $xmlContents.createElement("script")
        $newJs1.setAttribute("src", "scripts/lodash.min.js")
        $newJs1.setAttribute("type", "text/javascript")
        $newJs1.InnerText = ''
    
        $xmlRoot.insertAfter($newJs1, $insertAfterElement)
    }
    
    # Save the default.htm back to its original location
    $xmlContents.Save($fileName)
	
}



