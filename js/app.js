function shortName(id) {
    return id.replace(/\s*\(.*$/,'').slice(0,36) || 'Controller';
}

onPad('connect', (id) => {
    $('pad-status').textContent = shortName(id);
    $('pad-status').classList.add('online');
    $('connect-overlay').hidden = true;
    $('start-btn').disabled = false;
});

onPad('disconnect', () => {
    $('pad-status').textContent = 'No controller connected';
    $('pad-status').classList.remove('online');
    $('connect-overlay').hidden = false;
    $('start-btn').disabled = true;
});