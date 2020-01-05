
const postData = async (url = '', data = {}) => {

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;

  } catch (error) {
    console.log("error", error);
  }
}

const updateUI = async () => {

  const request = await fetch('http://localhost:3000/data');

  try {
    const data = await request.json();

    if (data[0].text == null) {

      document.querySelector('#label').innerHTML = "Please Enter a value to get sentimental analysis."

    } else {
      const mystring = `The Text Entered is: ${data[0].text},
                        The polarity is: ${data[0].polarity},
                        The subjectivity is: ${data[0].subjectivity}`;
      document.querySelector('#label').innerHTML = mystring;

    }
  } catch (error) {
    console.log("error", error);
  }
}


setTimeout(function () { updateUI() }, 1000);
export function performAction(e) {
  const input1 = document.getElementById('in1').value;
  if (input1.length != 0) {
    postData('http://localhost:3000', { url: input1 });
    console.log(input1);
  } else {
    alert('Please Enter a value to get sentimental analysis.');
  }
}








