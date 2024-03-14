Ext.define('MsTraining.store.Menu', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.menu',
    root: {
        text: 'Root',
        expanded: true,
        children: [
            {
                text: 'Security',
                iconCls: 'fa-lock',
                children:[
                    {
                        text:'Users',
                        iconCls:'fa fa-users',
                        className:'users',
                        leaf:true
                    },
                    {
                        text: 'Todos',
                        iconCls: 'fas fa-user-secret',
                        className: 'todogrid',
                        leaf: true
                    }
                ]

            },
            {
                text: 'Static Data',
                iconCls: 'fa fa-database fa-lg',
                children: [
                    {
                        text: 'Posts',
                        iconCls: 'fa-book',
                        className: 'postgrid',
                        leaf: true
                    },
                    {
                        text: 'Albums',
                        iconCls: 'fa-address-card',
                        className: 'albumgrid',
                        leaf: true
                    },
                    {
                        text: 'Todos',
                        iconCls: 'fa-list-ul',
                        className: 'todogrid',
                        leaf: true
                    },
                    {//checkoutform

                        text: 'Students',
                        iconCls: 'fa-user',
                        className: 'studentgrid',
                        leaf: true

                    }

                ]

            },

        ]
    }
})