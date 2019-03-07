import('/hello.js').then(() => {
  hello();
});

import('/hello-esm.js').then(module => {
  module.helloEsm();
});
