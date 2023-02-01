var cssId = 'ARCADECLASSIC_CSS';
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://frogc0d3.github.io/static/1f0df36f-0c11-4671-b081-22750c13af01/ARCADECLASSIC.css';
    link.media = 'all';
    head.appendChild(link);
}
