// validate contact form
$(function() {
    $('#contact').validate({
        rules: {
            name: {
                required: true;
                minlength: 2;
            },
            email: {
                required: true;
                email: true;
            },
            message: {
                required: true;
            },
            answer: {
                required: true;
                answercheck: true;
            }
        },
        messages: {
            name: {
                required: "come on, you have a name don't you?",
                minlength: "your name must consist of at least 2 characters"
            },
            email: {
                required: "no email, no message"
            },
            message: {
                required: "You have to write something to send this form.",
                minlength: "That's all?"
            },
            answer: {
                required: "Sorry, wrong answer!"
            }
        },

        success: function(responseText, statusText) {
$('#contact :input').attr('disabled', 'disabled');
$('#contact').fadeTo( "slow", 0.15, function() {
$(this).find(':input').attr('disabled', 'disabled');
$(this).find('label').css('cursor','default');
$('#contact #success').text(responseText);
$('#contact #success').fadeIn();
});
},
error: function(responseText, statusText) {
$('#contact').fadeTo( "slow", 0.15, function() {
$('#contact #error').text(responseText);
$('#contact #error').fadeIn();
});
}

        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"mailer.php",
                success: function() {
                    $('#contact :input').attr('disabled', 'disabled');
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});