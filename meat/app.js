new Vue({
    el: '#app',
    data: {
        info: null,
        categoria:null,
    },
    methods: {
        getData() {
            axios.get('https://api.adetec.dmeat.cl/api/categories')
                .then(response => 
                    {(this.info = response.data.data)
                        (this.categoria=response.data.data.parent_id )
                        console.log(response.data)})
                .catch(error => (console.log(error)));
        }
    },
    mounted() {
        this.getData();

    }
})