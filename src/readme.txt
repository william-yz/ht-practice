$.ajax('xxx', {
    methods: 'GET',
    xxx,
    success: function(data) {
        $.ajax('aaaa', {
            methods: 'GET',
            xxx,
            success: function(data) {
                $.ajax('xxx', {
                    methods: 'GET',
                    xxx,
                    success: function(data) {
                        
                    }
                })
            }
        })
    }
})

async function () {
    const result = await fetch('xxx')
    console.log(result)
    const result1 = await fetch('bbb')
}

fatch()
xx()
.then()
.then()
.catch()
