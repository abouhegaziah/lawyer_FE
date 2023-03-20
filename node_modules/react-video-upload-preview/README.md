# Video Upload React Preview

Preview an uploaded video file client side (without any server interaction). You can also select an arbitrary time to set the preview at or show the beginning or end of the video.

## Installation

Install from NPM

```
npm i react-video-upload-preview
```

OR

Install from Github: In your project's src directory, you can run:

```
git clone https://github.com/alvst/react-uploaded-video-preview.git
```

### Usage

```es6
import FileThumbnail from "react-uploaded-video-preview";
...
<FileThumbnail
    file={file}
    // Optional:
    startTime={3000}
    canvasSize={900}
    startTimeFail={2}
    finalFail={"end"}
    DefaultFailedOrientation={"Horizontal"}
    altText={"Custom Alt Text for screen readers"}
    CustomFailedFileImageHorizontal={CustomFailedHorizontal}
    CustomFailedFileImageVertical={CustomFailedVertical}
    />
```


## Properties

| Prop Name | Type | Default | Description |
| --- | --- | --- | --- |
| **file** (Required) | **object** | | A single file (not link) |
| **canvasSize** | **int** | 200 | The width of the thumbnail. |
| **startTime** | **int** | 0 | The ability to set an arbitrary time for the preview timestamp to show |
| **startTimeFail** | **int** |  | If the **startTime** specified is not available, because the file is too short, this is a secondary fall back. |
| **finalFail** | **string** | Beginning | If **startTime** and **startTimeFail** both are not available (because the file is too short), finalFail is the final fallback. You can specify beginning (default) or 'e'/'end' for end and ```video.duration```. |
| **defaultFailedOrientation** | **string** | Horizontal | If the file cannot display (due to incompatable file type or a Javascript error) and if no custom files are selected, a default ```Video Preview Not Available``` file is included that will be displayed. One horizontal, one vertical file are included. Specifying **Horizontal** or **Vertical** will use the appropriate file. |
| **CustomFailedFileImageHorizontal** | **object** | | A custom Horizontal file that will be displayed if the video file cannot be displayed|
| **CustomFailedFileImageVertical** | **object** | | A custom Vertical file that will be displayed if the video file cannot be displayed |

*Note: due to webpage memory constraints, you may want to limit the amount of times this is run on a single page. a maximum of 4 times is my recommendation as after it often reloads the page. Please file a pull request if you know how to fix this.

## Known Problems:

Only Safari is able to display .mov/.MOV file previews. If a .mov file is uploaded in a non-safari browser, a failed image file will shown. Using either ```CustomFailedFileImageHorizontal``` or ```CustomFailedFileImageVertical``` you can display your own custom file.

Attempting to display too many files can result in the page crashing (and the uploaded files being removed) depending on the browser and the users computer's RAM constraints. I recommend limiting the amount of files displayed to limit storage usage. You may also want to provide an option to not display the files.  If you know how to fix this, please file a [pull request](https://github.com/alvst/react-uploaded-video-preview/pulls). 

## Limitations:

This does not work for linking videos. For linking videos, check out other Github repositories [like](https://github.com/brothatru/react-video-thumbnail).

## Examples:

For an example see [here](https://github.com/alvst/demo-react-uploaded-video-preview).

## Contribution:

Want to contribute? Please file an [issue](https://github.com/alvst/react-uploaded-video-preview/issues) or [pull request](https://github.com/alvst/react-uploaded-video-preview/pulls).

## Inspiration & Credits:

This project was inspired by the [React Video Thumbnail Project](https://github.com/brothatru/react-video-thumbnail) as well as [this Stack Overflow answer](https://stackoverflow.com/a/63474748/10516042).