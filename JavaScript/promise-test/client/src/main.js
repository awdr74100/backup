import axios from 'axios';

// if (import.meta.hot) {
//   import.meta.hot.accept();
// }

const delay = (bool, ms) =>
  new Promise((resolve, reject) => {
    // reject(new Error('fail'));
    // throw new Error('fail');
    setTimeout(() => {
      if (bool) resolve('fulfilled!!!');
      else reject(new Error('rejected!!!'));
      // else throw new Error('fail');
      // else return Promise.reject(new Error('fail'));
    }, ms);
  });

// const asyncFunc = async () => {
//   // return delay(false, 1000);
//   // return Promise.resolve(123);
//   // return Promise.reject(new Error('11223'));
//   // return delay(false, 1000);
//   // try {
//   //   // const value = await delay(true, 2000);
//   //   // throw new Error('bang');
//   //   // return Promise.reject(new Error('bang'));
//   // } catch (error) {
//   //   console.log('EV', error);
//   // }
//   // console.log(123);
//   // return 123;
//   // return Promise.resolve(123);
//   // try {
//   // try {
//   // throw new Error('bang');
//   // } catch (error) {
//   //   console.log('Inner', error);
//   // }
//   // } catch (error) {
//   //   console.log('Inner', error);
//   //   throw new Error('vv');
//   // }
//   // return Promise.reject(new Error('bang'));
// };

// (async () => {
//   // throw new Error('dddc');
//   const value = await asyncFunc();
//   console.log(value);
//   // try {
//   //   const value = await asyncFunc();
//   //   console.log(value);
//   // } catch (error) {
//   //   console.log('Wrap Error', error);
//   // }
//   // throw new Error('cc');
//   // throw new Error('Go');
// })();

const btn = document.querySelector('.btn');

btn.addEventListener('click', async (e) => {
  e.preventDefault();

  const url = 'http://localhost:3000/api/check';

  try {
    const { data } = await axios.post(
      url,
      { statusCode: 401 },
      {
        validateStatus: undefined,
        // validateStatus(status) {
        //   return true;
        //   // return true
        //   // return status >= 200 && status < 300;
        // },
      },
    );

    console.log('Success => ', data);
  } catch (error) {
    console.log('Error => ', error);
  }

  // try {
  //   const res = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       statusCode: 403,
  //     }),
  //   });

  //   console.log(res.ok);
  //   console.log('Success => ', res);
  // } catch (error) {
  //   console.log('Error => ', error);
  // }
});
