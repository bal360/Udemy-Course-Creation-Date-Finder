module.exports = ({creationDate = '' , title = ''}) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Udemy Course Creation Date Finder</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      </head>
      <body style="display:flex; min-height:100vh; flex-direction:column;">
        <header>
          <div class="row">
            <h1 class="center-align blue-grey-text lighten-4">Udemy Course Creation Date Finder</h1>
          </div>
        </header>
        <main style="flex: 1 0 auto;">
          <div class="container">
            <div class="row">
              <form method="POST">
                <div class="input-field col s5 offset-s3">
                  <input name="courseURL" type="text" placeholder="Enter Course URL">
                  </div>
                  <div class="input-field col s4">
                    <button class="btn blue-grey lighten-4" type="submit"><i class="material-icons">search</i></button>
                </div>
              </form>
            </div>
            <div class="row center-align">
              <h3 class="light-blue-text">${title}</h3>
              <h2 class="light-blue-text">${creationDate}</h2>
            </div>
          </div>
        </main>
        <footer class="page-footer blue-grey lighten-4">
          <div class="container">
            <div class="row center-align">
              <a href="https://www.blakeallanlong.dev" target="_blank" style="color: inherit;">blakeallanlong.dev</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  `
}