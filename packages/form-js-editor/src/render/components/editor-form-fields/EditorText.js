import { Text, isExpression } from '@bpmn-io/form-js-viewer';
import { editorFormFieldClasses } from '../Util';

import { iconsByType } from '../icons';

export default function EditorText(props) {

  const { type, text = '' } = props.field;

  const Icon = iconsByType['text'];

  if (!text) {
    return <div class={ editorFormFieldClasses(type) }>
      <div class="fjs-form-field-placeholder"><Icon viewBox="0 0 54 54" />Text view is empty</div>
    </div>;
  }

  if (isExpression(text)) {
    return <div class={ editorFormFieldClasses(type) }>
      <div class="fjs-form-field-placeholder"><Icon viewBox="0 0 54 54" />Text view is populated by an expression</div>
    </div>;
  }

  return <Text { ...{ ...props, disableLinks: true } } />;
}

EditorText.create = Text.create;
EditorText.type = Text.type;
EditorText.keyed = Text.keyed;