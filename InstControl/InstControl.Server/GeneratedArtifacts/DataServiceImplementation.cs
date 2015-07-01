﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using global::System.Linq;

namespace LightSwitchApplication.Implementation
{
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class ApplicationDataDataService
        : global::Microsoft.LightSwitch.ServerGenerated.Implementation.DataService<global::LightSwitchApplication.Implementation.ApplicationData>
    {
    
        public ApplicationDataDataService() : base()
        {
        }
    
        protected override global::Microsoft.LightSwitch.IDataService GetDataService(global::Microsoft.LightSwitch.IDataWorkspace dataWorkspace)
        {
            return ((global::LightSwitchApplication.DataWorkspace)dataWorkspace).ApplicationData;
        }
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class ApplicationDataServiceImplementation
        : global::Microsoft.LightSwitch.ServerGenerated.Implementation.DataServiceImplementation<global::LightSwitchApplication.Implementation.ApplicationData>
    {
        public ApplicationDataServiceImplementation(global::Microsoft.LightSwitch.IDataService dataService) : base(dataService)
        {
        }
    
    #region Queries
        public global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.MitarbeiterItem> aktuelleMitarbeiter()
        {
            global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.MitarbeiterItem> query;
            global::System.DateTime today1 = global::Microsoft.LightSwitch.RelativeDates.Today();
            query = global::System.Linq.Queryable.ThenBy(
                global::System.Linq.Queryable.ThenBy(
                    global::System.Linq.Queryable.OrderBy(
                        global::System.Linq.Queryable.Where(
                            this.GetQuery<global::LightSwitchApplication.Implementation.MitarbeiterItem>("MitarbeiterItemSet"),
                            (m) => ((m.Ausscheidedatum.HasValue && (m.Ausscheidedatum >= today1)) || (m.Ausscheidedatum.HasValue == false))),
                        (m) => m.Nachname),
                    (m) => m.Vorname),
                (m) => m.Geburtstag);
            return query;
        }
    
        public global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.MitarbeiterItem> ausgeschiedeneMitarbeiter()
        {
            global::System.Linq.IQueryable<global::LightSwitchApplication.Implementation.MitarbeiterItem> query;
            global::System.DateTime today1 = global::Microsoft.LightSwitch.RelativeDates.Today();
            query = global::System.Linq.Queryable.ThenBy(
                global::System.Linq.Queryable.ThenBy(
                    global::System.Linq.Queryable.OrderBy(
                        global::System.Linq.Queryable.Where(
                            this.GetQuery<global::LightSwitchApplication.Implementation.MitarbeiterItem>("MitarbeiterItemSet"),
                            (m) => (m.Ausscheidedatum.HasValue && (m.Ausscheidedatum.HasValue && (m.Ausscheidedatum < today1)))),
                        (m) => m.Ausscheidedatum),
                    (m) => m.Nachname),
                (m) => m.Vorname);
            return query;
        }
    
    #endregion

    #region Protected Methods
        protected override object CreateObject(global::System.Type type)
        {
            if (type == typeof(global::LightSwitchApplication.Implementation.AbteilungItem))
            {
                return new global::LightSwitchApplication.Implementation.AbteilungItem();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.BeschäftigungsArtItem))
            {
                return new global::LightSwitchApplication.Implementation.BeschäftigungsArtItem();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.MitarbeiterItem))
            {
                return new global::LightSwitchApplication.Implementation.MitarbeiterItem();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.ProjektItem))
            {
                return new global::LightSwitchApplication.Implementation.ProjektItem();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.VertragItem))
            {
                return new global::LightSwitchApplication.Implementation.VertragItem();
            }
    
            return base.CreateObject(type);
        }
    
        protected override global::LightSwitchApplication.Implementation.ApplicationData CreateObjectContext()
        {
            string assemblyName = global::System.Reflection.Assembly.GetExecutingAssembly().GetName().Name;
            return new global::LightSwitchApplication.Implementation.ApplicationData(this.GetEntityConnectionString(
                "_IntrinsicData",
                "res://" + assemblyName + "/ApplicationData.csdl|res://" + assemblyName + "/ApplicationData.ssdl|res://" + assemblyName + "/ApplicationData.msl",
                "System.Data.SqlClient",
                true));
        }
    
        protected override global::Microsoft.LightSwitch.Internal.IEntityImplementation CreateEntityImplementation<T>()
        {
            if (typeof(T) == typeof(global::LightSwitchApplication.AbteilungItem))
            {
                return new global::LightSwitchApplication.Implementation.AbteilungItem();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.BeschäftigungsArtItem))
            {
                return new global::LightSwitchApplication.Implementation.BeschäftigungsArtItem();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.MitarbeiterItem))
            {
                return new global::LightSwitchApplication.Implementation.MitarbeiterItem();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.ProjektItem))
            {
                return new global::LightSwitchApplication.Implementation.ProjektItem();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.VertragItem))
            {
                return new global::LightSwitchApplication.Implementation.VertragItem();
            }
            return null;
        }
    
    #endregion
    
    }
    
    #region DataServiceImplementationFactory
    [global::System.ComponentModel.Composition.PartCreationPolicy(global::System.ComponentModel.Composition.CreationPolicy.Shared)]
    [global::System.ComponentModel.Composition.Export(typeof(global::Microsoft.LightSwitch.Internal.IDataServiceFactory))]
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class __DataServiceFactory :
        global::Microsoft.LightSwitch.ServerGenerated.Implementation.DataServiceFactory
    {
    
        protected override global::Microsoft.LightSwitch.IDataService CreateDataService(global::System.Type dataServiceType)
        {
            if (dataServiceType == typeof(global::LightSwitchApplication.ApplicationDataService))
            {
                return new global::LightSwitchApplication.ApplicationDataService();
            }
            return base.CreateDataService(dataServiceType);
        }
    
        protected override global::Microsoft.LightSwitch.Internal.IDataServiceImplementation CreateDataServiceImplementation<TDataService>(TDataService dataService)
        {
            if (typeof(TDataService) == typeof(global::LightSwitchApplication.ApplicationDataService))
            {
                return new global::LightSwitchApplication.Implementation.ApplicationDataServiceImplementation(dataService);
            }
            return base.CreateDataServiceImplementation(dataService);
        }
    }
    #endregion
    
    [global::System.ComponentModel.Composition.PartCreationPolicy(global::System.ComponentModel.Composition.CreationPolicy.Shared)]
    [global::System.ComponentModel.Composition.Export(typeof(global::Microsoft.LightSwitch.Internal.ITypeMappingProvider))]
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class __TypeMapping
        : global::Microsoft.LightSwitch.Internal.ITypeMappingProvider
    {
        global::System.Type global::Microsoft.LightSwitch.Internal.ITypeMappingProvider.GetImplementationType(global::System.Type definitionType)
        {
            if (typeof(global::LightSwitchApplication.AbteilungItem) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.AbteilungItem);
            }
            if (typeof(global::LightSwitchApplication.BeschäftigungsArtItem) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.BeschäftigungsArtItem);
            }
            if (typeof(global::LightSwitchApplication.MitarbeiterItem) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.MitarbeiterItem);
            }
            if (typeof(global::LightSwitchApplication.ProjektItem) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.ProjektItem);
            }
            if (typeof(global::LightSwitchApplication.VertragItem) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.VertragItem);
            }
            return null;
        }
    }
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class AbteilungItem :
        global::LightSwitchApplication.AbteilungItem.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::System.Collections.IEnumerable global::LightSwitchApplication.AbteilungItem.DetailsClass.IImplementation.MitarbeiterItemCollection
        {
            get
            {
                return this.MitarbeiterItemCollection;
            }
        }
        
        global::System.Collections.IEnumerable global::LightSwitchApplication.AbteilungItem.DetailsClass.IImplementation.ProjektItemCollection
        {
            get
            {
                return this.ProjektItemCollection;
            }
        }
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.AbteilungItem.DetailsClass.IImplementation.Abteilungsleiter
        {
            get
            {
                return this.Abteilungsleiter;
            }
            set
            {
                this.Abteilungsleiter = (global::LightSwitchApplication.Implementation.MitarbeiterItem)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("Abteilungsleiter");
                }
            }
        }
        
        partial void OnAbteilungItem_MitarbeiterItem1Changed()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("Abteilungsleiter");
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class BeschäftigungsArtItem :
        global::LightSwitchApplication.BeschäftigungsArtItem.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::System.Collections.IEnumerable global::LightSwitchApplication.BeschäftigungsArtItem.DetailsClass.IImplementation.VertragItem
        {
            get
            {
                return this.VertragItem;
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class MitarbeiterItem :
        global::LightSwitchApplication.MitarbeiterItem.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::System.Collections.IEnumerable global::LightSwitchApplication.MitarbeiterItem.DetailsClass.IImplementation.VertragItemCollection
        {
            get
            {
                return this.VertragItemCollection;
            }
        }
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.MitarbeiterItem.DetailsClass.IImplementation.AbteilungItem
        {
            get
            {
                return this.AbteilungItem;
            }
            set
            {
                this.AbteilungItem = (global::LightSwitchApplication.Implementation.AbteilungItem)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("AbteilungItem");
                }
            }
        }
        
        global::System.Collections.IEnumerable global::LightSwitchApplication.MitarbeiterItem.DetailsClass.IImplementation.Abteilungsleiter
        {
            get
            {
                return this.Abteilungsleiter;
            }
        }
        
        partial void OnAbteilungItem_MitarbeiterItemChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("AbteilungItem");
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class ProjektItem :
        global::LightSwitchApplication.ProjektItem.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::System.Collections.IEnumerable global::LightSwitchApplication.ProjektItem.DetailsClass.IImplementation.VertragItemCollection
        {
            get
            {
                return this.VertragItemCollection;
            }
        }
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.ProjektItem.DetailsClass.IImplementation.AbteilungItem
        {
            get
            {
                return this.AbteilungItem;
            }
            set
            {
                this.AbteilungItem = (global::LightSwitchApplication.Implementation.AbteilungItem)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("AbteilungItem");
                }
            }
        }
        
        partial void OnAbteilungItem_ProjektItemChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("AbteilungItem");
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "14.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class VertragItem :
        global::LightSwitchApplication.VertragItem.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.VertragItem.DetailsClass.IImplementation.MitarbeiterItem
        {
            get
            {
                return this.MitarbeiterItem;
            }
            set
            {
                this.MitarbeiterItem = (global::LightSwitchApplication.Implementation.MitarbeiterItem)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("MitarbeiterItem");
                }
            }
        }
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.VertragItem.DetailsClass.IImplementation.BeschäftigungsArtItem
        {
            get
            {
                return this.BeschäftigungsArtItem;
            }
            set
            {
                this.BeschäftigungsArtItem = (global::LightSwitchApplication.Implementation.BeschäftigungsArtItem)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("BeschäftigungsArtItem");
                }
            }
        }
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.VertragItem.DetailsClass.IImplementation.ProjektItem
        {
            get
            {
                return this.ProjektItem;
            }
            set
            {
                this.ProjektItem = (global::LightSwitchApplication.Implementation.ProjektItem)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("ProjektItem");
                }
            }
        }
        
        partial void OnVertragItem_MitarbeiterItemChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("MitarbeiterItem");
            }
        }
        
        partial void OnBeschäftigungsArtItem_VertragItemChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("BeschäftigungsArtItem");
            }
        }
        
        partial void OnVertragItem_ProjektItemChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("ProjektItem");
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
}
