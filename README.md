# Retrowave SPA
👉 The result of this repository can be seen in https://ivanscaglioni.github.io

## TOOLS USED IN THE PROJECT ##

### Code editor ####
>Visual Studio Code                  
>![icons8-visual-studio-code-2019](https://user-images.githubusercontent.com/91486406/164815063-6436e4ef-abd9-4262-8fc5-ecd847971cbf.svg)                            


### Dev server and builder of optimized static files  ###
> Webpack 5            
> ![icons8-webpack](https://user-images.githubusercontent.com/91486406/164815386-2d30474d-584b-420b-9d95-f4cfb5c919e4.svg)         


### version controller ###
> _  Git          
>![icons8-git](https://user-images.githubusercontent.com/91486406/164815513-08a7ba00-091e-4786-8dda-bf5ee7ff5e1a.svg)      

### Framework ###
>vue(sfc)        
>![icons8-vue-js](https://user-images.githubusercontent.com/91486406/164815799-9a2591db-c082-4890-9147-f2e9a68fe539.svg)


## FILE BY FILE EXPLANATION  ##

1. - - - -
![i](https://user-images.githubusercontent.com/91486406/164817050-d37b7236-742c-423c-bbfd-a7a7f13a9487.jpg)

  * **Portfolio:**  main container folder of the project 
    * **frontend:**   all the code, necessary configurations and the dist folder
    * **.gitignore:** all files and folder that don't exist for git
    * **README.md:** the document you are reading right now
2. - - - -
![ii](https://user-images.githubusercontent.com/91486406/164865862-afd99b7b-70cd-4693-85ac-29d3bcc1cc3a.jpg)      

* **config:** folder with all webpack configuration
  * **webpack.common.js:**   specification of input and output. plugin import. rules of the different types of files (ts,                                vue, css, html, images, mp3 and font)
  
  * **webpack.dev.js:**  development mode, server deployment locally on a port plus indication of static files
  
  * **webpack.prod.js:** Mode of production


 3. - - - -
![iii](https://user-images.githubusercontent.com/91486406/164874490-40a18563-6422-480c-80a8-3148f0bda7e5.jpg)    
* **public:** folder containing all the graphic material such as images and icons
  * **img:**  inside there are large and quality images
  * **icons:**  inside there are small size icons in svg format

4. - - - -
![iv](https://user-images.githubusercontent.com/91486406/164878144-6eb3734b-fe3b-4fac-8911-95c16e61802f.jpg)               
* **src:** mother folder with all the code that the front-end needs
  * **components:** all you see on the page is the sum of all the components
  * **router:**  this project uses vue router so you need a place where the specified routes are
    * **indext.ts:** declaration of an array with all the routes of the page
  * **views:** containing folder of all the views that the page will have
    * **Main.vue:**  the main view that is displayed when entering the page
  * **App.vue:** the parent component that contains all the components and views. which will be injected into index.html
  * **index.html**  where the vue components are injected and also has the media query for responsive design
  *  **main.ts** indicates where to inject App.vue in index.html
5. - - - - 
![v](https://user-images.githubusercontent.com/91486406/164882349-453fdddc-e434-4c66-8232-44774f76d231.jpg)           
* **.browserslistrc:** browser compatibility
* **import.d.ts:** module declarations to be able to import with typescript
* **packege-lock.json:** Do not touch ¯\_(ツ)_/¯
* **package.json:** information to be able to clone project dependencies. script to run the project
* **tsconfing.json:**  typescript configuration to be able to use it in the project
  
  
