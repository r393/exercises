$(function () {
    $('#loginBtn').click(function (e) {
        e.preventDefault()
        let checkData = true

        // check username input is not empty
        let userName = $('#usernameInput').val()
        if(!userName.trim()){
            $('#usernameAlert').removeClass('d-none')
            checkData = false
        }
        // check password input is not empty
        let password = $('#passwordInput').val()
        if(!password.trim()){
            $('#passwordAlert').removeClass('d-none')
            checkData = false
        }
        //if ($('#passwordInput').val().trim() && $('#usernameInput').val().trim()){
        // ajax request
        //     }

        if(checkData){
            // prepare data to be sent to the server
            // if the object key or propertt name are same as variable name you can write only the variable name
            let sentDataObj = {
                userName, // userName: userName,
                password
            }
            // ajax request
            // url is /usercheck.json
            // https://www.bla.com/login/
            // https://www.bla.com.usercheck.json



            $.ajax({
                type: "GET",
                url: "/usercheck.json",
                data: JSON.stringify(sentDataObj),
                dataType: "json",
                success: function (response) {
                    console.log(response)
                    // show login error modal
                    // $('errorBtn').click()
                    if(!response.result){
                        $('#loginerrorModal').modal('show')
                    }else{
                        //login success
                        alert("login success")
                    }
                     
                    
                }
            });
        }
        
    });

});