const URL = 'http://whatthecommit.com/index.txt';

const myAsyncAjax = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};

myAsyncAjax(URL).then((response) => {
  console.log(response);
});

/* myAsyncAjax(URL).catch(console.log('something happened :-)')) */