$anaconda(() => {
    $anaconda('button').css('background', '#09f').css('border', '#fff').css({
        padding: '16px',
        borderRadius: '4px'
    }).on('click', () => {
        alert('Hello github');
        $anaconda('#message').fadeIn();
    });

    $anaconda('li').each((index, item) => {
        if(index === 0) $anaconda(item).css('color', '#09f')
        if(index === 1) $anaconda(item).css('color', 'red')
        if(index === 2) $anaconda(item).css('color', 'green')
    });
});