var show = (function () {


    var brandStr, instructions, i, xhr;

    brandStr = [
        '\n',
        '  HH IIIIIIIIII HH  \n',
        '  HH IIIIIIIIII HH  \n',
        '  HH     II     HH  \n',
        '  HH     II     HH  \n',
        '  HH     II     HH  \n',
        '  HH     II     HH  \n',
        '  HHHHHHHHHHHHHHHH  \n',
        '  HHHHHHHHHHHHHHHH  \n',
        '  HH     II     HH  \n',
        '  HH     II     HH  \n',
        '  HH     II     HH  \n',
        '  HH     II     HH  Hughes\n',
        '  HH     II     HH  Industries  \n',
        '  HH IIIIIIIIII HH  Ltd\n',
        '  HH IIIIIIIIII HH  Est 2014\n',
        '\n'
    ].join('');
    
    instructions = [
        'sheep',
        'chris'
    ];
    
    i = instructions.length - 1;
    
    xhr = new XMLHttpRequest(),
        protocol = 'http://',
        domain = 'rudenoise.uk',
        endpoint = '',
        env = 'local',
        statusDiv;

    xhr.onreadystatechange = function () {
        var resObj;
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                resObj = JSON.parse(xhr.responseText);
                resObj.arrived = (new Date()).toJSON();
                resObj.env = env;
                console.log(resObj);
            } else {
                console.error(protocol + domain + endpoint, xhr.status);
            }
        }
    };

    console.log(brandStr);

    console.log('Hello, fancy meeting you here!\nGive instructions like:');

    while (i >= 0) {
        console.log('> show(\'' + instructions[i] + '\');');
        i -= 1;
    }

    function getArt(title) {
        endpoint = '/' + title + '/art.json';
        xhr.open('GET', protocol + domain + endpoint, true);
        xhr.send();
    }

    return function (instruction) {
        console.log('Try instruction: ' + instruction);
        if (instructions.indexOf(instruction < 0)) {
            console.error('Instruction not found.');
            return;
        }
        getArt(title);
        return;
    };

}());
