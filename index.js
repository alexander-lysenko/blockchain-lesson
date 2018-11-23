$(function() {
    var game_over = false;
    var attempts = 0;
    var $hash_input = $("#hash_input");
    var $hash_output = $("#hash_output");
    var $hash_attempts = $("#hash_attempts");
    $hash_input.bind("keyup", function(e) {
        if (game_over) return;

        var new_hash_input = $hash_input.val();
        if (new_hash_input.length >= 1) {
            var new_hash_output = sha256(new_hash_input);
            $hash_output.html(new_hash_output);
            attempts = attempts + 1;
            $hash_attempts.html("Попытка: " + attempts);
            if (new_hash_output[0] == "0" && new_hash_output[1] == "0") {
                game_over = true;
                $hash_input.prop('disabled', true);
                $hash_output.removeClass('alert-info').addClass('alert-success');
                $hash_attempts.removeClass('alert-info').addClass('alert-success');
                $hash_attempts.html("Ушло попыток: " + attempts);
            }
        }
    });
});