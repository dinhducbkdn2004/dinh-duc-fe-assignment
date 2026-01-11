import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import 'quill/dist/quill.snow.css';

import Quill from 'quill/core';
import Toolbar from 'quill/modules/toolbar';
import Snow from 'quill/themes/snow';
import Bold from 'quill/formats/bold';
import Italic from 'quill/formats/italic';
import Underline from 'quill/formats/underline';
import Strike from 'quill/formats/strike';
import Link from 'quill/formats/link';
import Blockquote from 'quill/formats/blockquote';
import Header from 'quill/formats/header';
import List from 'quill/formats/list';
import CodeBlock from 'quill/formats/code';
import { cn } from '@/utils';

Quill.register({
  'modules/toolbar': Toolbar,
  'themes/snow': Snow,
  'formats/bold': Bold,
  'formats/italic': Italic,
  'formats/underline': Underline,
  'formats/strike': Strike,
  'formats/link': Link,
  'formats/blockquote': Blockquote,
  'formats/header': Header,
  'formats/list': List,
  'formats/code-block': CodeBlock,
});

export interface RichTextEditorProps {
  value?: string;
  onChange?: (content: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  toolbar?:
    | boolean
    | Array<
        Array<
          string | { [key: string]: string | number | boolean | Array<string | number | boolean> }
        >
      >;
  minHeight?: string;
}

export interface RichTextEditorRef {
  getContent: () => string;
  setContent: (html: string) => void;
  clear: () => void;
  focus: () => void;
  getQuill: () => Quill | null;
}

export const RichTextEditor = forwardRef<RichTextEditorRef, RichTextEditorProps>(
  (
    {
      value,
      onChange,
      placeholder = 'Write something...',
      className,
      disabled = false,
      toolbar = true,
      minHeight = '120px',
    },
    ref,
  ) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const quillRef = useRef<Quill | null>(null);
    const isUpdatingRef = useRef(false);

    useImperativeHandle(ref, () => ({
      getContent: () => {
        return quillRef.current?.root.innerHTML || '';
      },
      setContent: (html: string) => {
        if (quillRef.current) {
          quillRef.current.root.innerHTML = html;
        }
      },
      clear: () => {
        if (quillRef.current) {
          quillRef.current.setText('');
        }
      },
      focus: () => {
        if (quillRef.current) {
          quillRef.current.focus();
        }
      },
      getQuill: () => quillRef.current,
    }));

    const onChangeRef = useRef(onChange);
    useEffect(() => {
      onChangeRef.current = onChange;
    }, [onChange]);

    useEffect(() => {
      if (editorRef.current && !quillRef.current) {
        const toolbarOptions =
          toolbar === true
            ? [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ header: [1, 2, 3, false] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link'],
              ]
            : toolbar;

        quillRef.current = new Quill(editorRef.current, {
          theme: 'snow',
          placeholder,
          modules: {
            toolbar: toolbarOptions,
          },
        });

        quillRef.current.on('text-change', () => {
          if (quillRef.current && !isUpdatingRef.current) {
            const html = quillRef.current.root.innerHTML;
            onChangeRef.current?.(html);
          }
        });
      }
    }, [placeholder, toolbar]);

    useEffect(() => {
      if (quillRef.current && value !== undefined) {
        const currentContent = quillRef.current.root.innerHTML;
        if (currentContent !== value && !isUpdatingRef.current) {
          isUpdatingRef.current = true;
          quillRef.current.root.innerHTML = value;
          isUpdatingRef.current = false;
        }
      }
    }, [value]);

    useEffect(() => {
      if (quillRef.current) {
        quillRef.current.enable(!disabled);
      }
    }, [disabled]);

    return (
      <div
        className={cn('quill-editor', disabled && 'opacity-50 pointer-events-none', className)}
        style={{ '--quill-min-height': minHeight } as React.CSSProperties}
      >
        <div ref={editorRef} />
      </div>
    );
  },
);

RichTextEditor.displayName = 'RichTextEditor';
