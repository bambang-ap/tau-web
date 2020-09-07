import parser from "bbcode-to-react";
import customBbTag, { gdgg } from 'src/utils/bbCode/vcRow';

parser.registerTag('vc_row', customBbTag);
parser.registerTag('vc_column', customBbTag);
// parser.registerTag('vc_empty_space', gdgg);
// parser.registerTag('vc_text_separator', gdgg);
parser.registerTag('vc_btn', gdgg);
parser.registerTag('vc_column_text', customBbTag);
parser.registerTag('vc_tta_tabs', customBbTag);
parser.registerTag('vc_tta_section', customBbTag);
parser.registerTag('vcex_button', customBbTag);

const bbCodeToHtml = bbcode => {
	const htmlString = parser.toReact(bbcode)
	return htmlString
}

export default bbCodeToHtml 