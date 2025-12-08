$(document).ready(() => {
  const url = 'https://anapioficeandfire.com/api/books/';
  const $booksContainer = $('#books');
  const $loading = $('#loading');

  // Start AJAX request
  $.ajax({
    url: url,
    method: 'GET',
    success: function(books) {
      $loading.remove(); // Hide loader when data arrives

      books.forEach(book => {
        const $bookCard = $('<div>').css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#fff'
        });

        $bookCard
          .append($('<h3>').text(book.name))
          .append($('<p>').addClass('mb-1').html('<strong>by</strong> ' + book.authors.join(', ')))
          .append($('<p>').text(book.released.substring(0, 4)))
          .append($('<p>').text(book.numberOfPages + ' pages'));

        $booksContainer.append($bookCard);
      });
    },
    error: function() {
      $loading.hide();
      $booksContainer.append('<p class="text-danger">Failed to load books.</p>');
    }
  });
});