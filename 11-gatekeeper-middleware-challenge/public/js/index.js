$(() => {
  $('form').on('submit', e => {
    event.preventDefault();

    let user = $('.user').val()
        pass = $('.pass').val()
        $userContainer = $('.user');
    
    // reset form
    $(e.target)[0].reset();

    if (!user || !pass) { 
      return $userContainer.html('<p>Please enter your username and password.</p>')
    }

    $.ajax({
      url: 'http://localhost:8080/api/users/me',
      method: 'GET',
      dataType: 'json',
      headers: {
        'x-username-and-password': `user=${user}&password=${pass}`
      },
      success: user => {
        let html = '';
        // using for...of loop to iterate over an iterable created by Object.entries()
        // the iterable will be an array of arrays with such taxonomy
        /*
         * 0: ["id", 1]
         * 1: ["firstName", "Joe"]
         * 2: ["lastName", "Schmoe"]
         * 3: ["userName", "joeschmoe@business.com"]
         * 4: ["position", "Sr. Engineer"]
         * 5: ["isAdmin", true]
         * 6: ["password", "1234"]
         */
        for (let [key, value] of Object.entries(user)) {
          html+= `<p>${key}: ${value}</p>`
        }
        $userContainer.html(html);
      },
      error: err => $userContainer.html(`<p>${err.message}</p>`)
    });

  });
});