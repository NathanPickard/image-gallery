describe('Image gallery component', () => {
  const { assert } = chai;

  angular.mock.module.sharedInjector();  

  before(angular.mock.module('components'));

  let $component = null;

  before(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  const testingImage = {
    url: 'testingimageurl.com',
    image_title: 'testingImage93',
    image_description: 'testdescription'
  };

  describe('Create component', () => {

    const images = [
      { url: 'imageurl.com',
        image_title: 'image3',
        image_description: 'tinylittlebunny' },
       { url: 'image2url.com',
         image_title: 'image8',
         image_description: 'smallbunny' }
    ];

    const image = {
    url: 'http://4.bp.blogspot.com/-HTvSYzA-pO4/UgQb4Zh_u0I/AAAAAAAAEuI/XwhtogT_1tA/s1600/3+cute2.jpg',
    image_title: 'Little bunny',
    image_description: 'Young little bunny in the grass'
    };

    const imageService = {
      get() {
        return Promise.resolve(image);
      },
    };

    // console.log($component);

    // let component = null;
    // before(() => {
    //  component = $component('images', {imageService});
    // });

    // it('Loads the images', done => {
    //     const component = $component('imageApp', { imageService });

    //   // assert.isOk(component.loading);
    //   setTimeout(() => {
    //     assert.equal(component.image, image);
    //     // assert.isNotOk(component.loading);
    //     done();
    //   });
    // });
  });
});