Ext.define('MsTraining.model.User', {
    extend: 'Ext.data.Model',
    idProperty: '_id',
    fields: [
        '_id',
        'name',
        'username',
        'email',
        'street',
        'suite',
        'city',
        'zipcode',
        'lat',
        'lng',
        'phone',
        'website',
        'companyName',
        'companyCatchPhrase',
        'companyBs'
    ],
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/users',
        reader: {
            type: 'json',
            rootProperty: 'rows',
            totalProperty: 'totalCount'
        }
    }
});
