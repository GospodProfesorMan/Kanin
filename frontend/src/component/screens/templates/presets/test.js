import ReactHtmlParser from 'react-html-parser';
export default function Raw(input) {
    console.log("displaying raw input: " + input);
    return (<div>
        {ReactHtmlParser(input)}
    </div>)
}