
const form = document.querySelector('form');
const nameInput = document.querySelector('.firstName');
const emailInput = document.querySelector('.email');
const messageInput = document.querySelector('.message');

//Hide the serviceID
const serviceID = 'service_gl0qz3c';
const templateID = 'template_rtigo3q';
const templateID2 = 'template_i2ttxjj';
const publicKey = 'lSpk5rbC6lAdBY2cR';



emailjs.init(publicKey);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputData = {
        from_name: nameInput.value,
        user_email: emailInput.value,
        message: messageInput.value,
    };
    emailjs.send(serviceID, templateID, inputData).then(
        ()=> {
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
            console.log('Success');
           
        }, 
        (error) => {
            console.log(error);
            }
        );
       /* emailjs.send(serviceID, templateID2, inputData).then(
            ()=> {
                
                console.log("success")
                window.scrollTo(0, 0);  // Scrolls to the top of the page
                location.reload();

            },
            (error) => {
                console.log(error);
                }
            );*/

    
    });



