    var light = 'on';

    function toggleLight() {
    if (light === 'on') {
        light = 'off';
    } else {
        light = 'on';
    }
    }

    toggleLight();

    light = (light === 'on') ? 'off' : 'on';