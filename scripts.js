function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var sections = document.querySelectorAll('section');

    sections.forEach(function(sec) {
        if (sec.id !== sectionId) {
            sec.style.display = 'none';
        }
    });

    var currentDisplay = section.style.display;

    if (currentDisplay === 'block' || currentDisplay === '') {
        section.style.display = 'none';
    } else {
        section.style.display = 'block';
    }
}
