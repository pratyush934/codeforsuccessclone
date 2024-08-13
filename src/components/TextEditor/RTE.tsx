import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorState } from  'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), { ssr: false });

const RichTextExample: React.FC = () => {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState: EditorState): void => {
    setEditorState(newEditorState);
  };

  return (
    <div className='bg-white text-black'>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <button onClick={() => console.log(editorState.getCurrentContent)}>Log Editor State</button>
    </div>
  );
};

export default RichTextExample