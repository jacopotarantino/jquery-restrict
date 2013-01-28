(function($) {

    $.fn.restrict = function(pattern, allowed) {

        allowed = allowed || [];

        $(this).keypress(function(event) {

            if(event.which) {

                // Get the pressed key
                var key = event.which;

                // Return true if in array of allowed characters
                if($.inArray(key, allowed) > -1) {
                    return true;
                }

                // Get the characted form the pressed key
                var character = String.fromCharCode(key);

                // Test the character against the defined pattern
                regEx = new RegExp(pattern);
                if(regEx.test(character)) {
                    return true;
                }

                // If the test fails, prevent the key from being typed
                event.preventDefault();
                return false;
            };
        });

        return this;
    };

})(jQuery);
