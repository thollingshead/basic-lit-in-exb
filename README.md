# Instructions

1. Install Experience Builder Developer Edition v1.19
> https://developers.arcgis.com/experience-builder/guide/install-guide/

2. Copy `basic-lit-component` and `exb-widget` directories into `<ArcGISExperienceBuilder>/client/your-extensions/widgets`

3. Install component & widget dependencies
```
cd <ArcGISExperienceBuilder>/client
node npm-bootstrap-extensions.js
```

4. Add the custom widget to an app

5. Note that the Lit component added directly to the DOM renders correctly (with configured Portal url), but the ExB widget errors
<img width="1207" height="420" alt="image" src="https://github.com/user-attachments/assets/e671c4c7-1e0d-4da2-8efb-7506fe6154b8" />
