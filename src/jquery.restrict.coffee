jQuery.fn.restrict = (pattern) ->
  jQuery(this).keypress (event) ->
  	# If the event was triggered by a keypress.
	  if event.which
      # Test the character against the defined pattern.
      regEx = new RegExp pattern

      string = $(this).val() + String.fromCharCode event.which

      if not regEx.test string
        event.preventDefault()

  # Always return this so we can chain.
  return this

