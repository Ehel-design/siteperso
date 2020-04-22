document.getElementById('bouton').addEventListener('click', () => {
  console.log('je rentre ds click listener');
  var hiddenSvg = document.getElementsByClassName('hiddensvg');
  for ( var i=0; i < hiddenSvg.length ; i++) {
    if ( hiddenSvg[i].style.display === 'block' ) {
      console.log('je cache !');
      hiddenSvg[i].style.display = 'none';
      // Opacity change sur main bouton
      document.getElementById('bouton').style.opacity = '1';
    }
    else {
      console.log('je montre!');
      hiddenSvg[i].style.display = 'block';
      // Opacity change sur main bouton
      document.getElementById('bouton').style.opacity = '0.5';
    }
  }
});