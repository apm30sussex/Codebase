document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const yOffset = -80; // Adjust offset as needed
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                
                window.scrollTo({top: y, behavior: 'smooth'});
            }
        });
    });
});

function showDescription() {
    document.querySelector('.description.hidden').classList.remove('hidden');
}

function hideDescription() {
    document.querySelector('.description').classList.add('hidden');
}

//COCA COLA CAN
// Function to switch between views for a specific X3D model
function switchToView(modelId, view) {
    var x3dModel = document.getElementById(modelId);
    var viewpoint = x3dModel.runtime.viewpoint[0]; // Assuming the first viewpoint is the default one

    switch (view) {
        case 'front':
            viewpoint.position = '0 0 10'; // Adjust the position according to your model
            viewpoint.orientation = '0 0 1 0'; // Adjust the orientation according to your model
            break;
        case 'top':
            viewpoint.position = '0 10 0'; // Adjust the position according to your model
            viewpoint.orientation = '1 0 0 -1.57'; // Adjust the orientation according to your model
            break;
        default:
            break;
    }
}

// Function to switch to wireframe mode for a specific X3D model
function switchToWireframe(modelId) {
    var x3dModel = document.getElementById(modelId);
    var sceneNode = x3dModel.getElementsByTagName('scene')[0];
    var inlineNode = sceneNode.getElementsByTagName('inline')[0];
    inlineNode.setAttribute('url', '3d models\cokecanwire.x3d'); 
}

//FANTA CAN
// Function to switch between views for a specific X3D model
function switchToView(modelId, view) {
    var x3dModel = document.getElementById(modelId);
    var viewpoint = x3dModel.runtime.viewpoint[0]; // Assuming the first viewpoint is the default one

    switch (view) {
        case 'front':
            viewpoint.position = '0 0 10'; // Adjust the position according to your model
            viewpoint.orientation = '0 0 1 0'; // Adjust the orientation according to your model
            break;
        case 'top':
            viewpoint.position = '0 10 0'; // Adjust the position according to your model
            viewpoint.orientation = '1 0 0 -1.57'; // Adjust the orientation according to your model
            break;
        default:
            break;
    }
}

// Function to switch to wireframe mode for a specific X3D model
function switchToWireframe(modelId) {
    var x3dModel = document.getElementById(modelId);
    var sceneNode = x3dModel.getElementsByTagName('scene')[0];
    var inlineNode = sceneNode.getElementsByTagName('inline')[0];
    inlineNode.setAttribute('url', '3d models\fantacanwire.x3d'); 
}

//SPRITE CAN
// Function to switch between views for a specific X3D model
function switchToView(modelId, view) {
    var x3dModel = document.getElementById(modelId);
    var viewpoint = x3dModel.runtime.viewpoint[0]; // Assuming the first viewpoint is the default one

    switch (view) {
        case 'front':
            viewpoint.position = '0 0 10'; // Adjust the position according to your model
            viewpoint.orientation = '0 0 1 0'; // Adjust the orientation according to your model
            break;
        case 'top':
            viewpoint.position = '0 10 0'; // Adjust the position according to your model
            viewpoint.orientation = '1 0 0 -1.57'; // Adjust the orientation according to your model
            break;
        default:
            break;
    }
}

// Function to switch to wireframe mode for a specific X3D model
function switchToWireframe(modelId) {
    var x3dModel = document.getElementById(modelId);
    var sceneNode = x3dModel.getElementsByTagName('scene')[0];
    var inlineNode = sceneNode.getElementsByTagName('inline')[0];
    inlineNode.setAttribute('url', '3d models\spritecanwire.x3d'); 
}

