import React, { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

export default function PTSlate(){

    const initialValue = [  {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
      },]
      
    const [editor] = useState(() => withReact(createEditor()))
     

    return(
        <div>EditorPage
           <Slate editor={editor} value={initialValue} >
           <Editable />
           </Slate> 
        </div>
    )
}

module.exports = PTSlate