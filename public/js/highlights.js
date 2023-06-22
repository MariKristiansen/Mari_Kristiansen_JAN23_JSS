// Sources:
// https://stackoverflow.com/questions/46224051/how-keep-same-table-cell-highlighted-after-page-refresh
// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
// https://www.geeksforgeeks.org/difference-between-local-storage-session-storage-and-cookies/
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage

var viewedMemes = sessionStorage.getItem('viewedMemes');
if (viewedMemes) {
    viewedMemes = JSON.parse(viewedMemes);
    for (var i = 0; i < viewedMemes.length; i++) {
        var memeId = viewedMemes[i];
        var row = document.getElementById(memeId);
        if (row) {
            row.classList.add('viewed-row');
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var detButton = document.querySelectorAll('.details-button');

    detButton.forEach(function (button) {
        button.addEventListener('click', function () {
            var row = this.parentNode.parentNode;
            row.classList.add('viewed-row');

            var memeId = row.getAttribute('id');
            var meme;

            if (viewedMemes) {
                viewedMemes.push(memeId);
            } else {
                viewedMemes = [memeId];
            }
            sessionStorage.setItem('viewedMemes', JSON.stringify(viewedMemes));

            for (var i = 0; i < data.length; i++) {
                if (data[i].id === memeId) {
                    meme = data[i];
                    break;
                }
            }

            if (meme) {
                meme.viewed = true;
            }
        });
    });
});