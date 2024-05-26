function changeContent(contentId) {
    const content = {
        content1: 'This is the content for Button 1.',
        content2: 'This is the content for Button 2.',
        content3: 'This is the content for Button 3.',
        content4: 'This is the content for Button 4.',
        content5: 'This is the content for Button 5.',
    };
    
    document.getElementById('content').textContent = content[contentId];
}
