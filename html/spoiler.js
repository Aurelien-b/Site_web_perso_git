function ouvrirFermerSpoiler(div)
  {
        var divContenu = div.getElementsByTagName('div')[0];
        if(divContenu.style.display == 'block')
        {
            divContenu.style.display = 'none';
        } else
        {
            divContenu.style.display = 'block';
        }
    }