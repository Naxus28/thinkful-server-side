$(() => {
  $('form').on('submit', e => {
    event.preventDefault();

    let user = $('.user').val()
        pass = $('.pass').val()
        $userContainer = $('.user');
    
    // reset form
    $(e.target)[0].reset();

    if (!user || !pass) { 
      return $userContainer.html('<p>Please enter your username and password.</p>');
    }

    $.ajax({
      url: 'http://localhost:8080/api/users/me',
      method: 'GET',
      dataType: 'json',
      headers: {
        'x-username-and-password': `user=${user}&password=${pass}`
      },
      success: user => {
        let html = '<h3>User</h3>';
        /* using for...of loop to iterate over an iterable (array of arrays) 
         * created by Object.entries(): 
         * 0: ["id", 1]
         * 1: ["firstName", "Joe"]
         * 2: ["lastName", "Schmoe"]
         * etc
         */
        for (let [key, value] of Object.entries(user)) {
          html+= `<p>${key}: ${value}</p>`
        }

        $userContainer.html(html);
      },
      error: err => $userContainer.html(`<p>${err.responseJSON.message}</p>`)
    });

  });
});