import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from 'quill-image-uploader';
import BaseButton from '../../../components/Button';
import moment from 'moment';
import { deleteNews, editNews, postNews } from '../../../utils/admin';
Quill.register('modules/imageUploader', ImageUploader);

const NewDetail = ({ isCreate, setDisplayPopup, isEditing, createNews, newsList, selectedNews }) => {
  const [saveContent, setSaveContent] = useState(true);
  const [editorValue, setEditorValue] = useState('');
  const [title, setTitle] = useState('');
  const userData = JSON.parse(localStorage.getItem('userData'));
  const userId = userData.userId;
  
  const [newDetail, setNewDetail] = useState(() => {
    if (isCreate) {
      return {
        title: title,
        content: editorValue,
        manager_id: userId,
        publish_date: moment().format('DYYYY-MM-DD'),
      };
    }
    if (isEditing) {
      return {
        selectedNews
      };
    }
  });
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
  ];

  const quillRef = useRef();

  const handleEdit = () => {
    setSaveContent(false);
  };

  useEffect(() => {
    setNewDetail((prevDetail) => ({
      ...prevDetail,
      title: title,
      manager_id: userId,
      content: isEditing ? newDetail.content : editorValue,
      publish_date: moment().format('YYYY-MM-DD'),
    }));
  }, [editorValue, title, newDetail.content]);

  const handleDone = async () => {
    setSaveContent(true);
    try {
      const result = await editNews({ news: selectedNews });
      console.log('News created successfully:', result);
      setDisplayPopup(false);
    } catch (error) {
      console.error('Failed to create news:', error);
    }
    alert('Success');
  };
  const handleSave = async () => {
    setSaveContent(true);
    try {
      const result = await postNews({ news: newDetail });
      console.log('News created successfully:', result);
      setDisplayPopup(false);
    } catch (error) {
      console.error('Failed to create news:', error);
    }

  };
  const handleDelete = async () => {
    try {
      const result = await deleteNews({ id: selectedNews.id });
      console.log('News created successfully:', result);
      setDisplayPopup(false);
    } catch (error) {
      console.error('Failed to create news:', error);
    }
  }

  const handleChange = (value) => {
    if (isEditing) {
      selectedNews.content = value;
    } else {
      setEditorValue(value);
    }
    console.log('newDetail', newDetail);
    
  };
   const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
     if (isEditing) {
       selectedNews.title = newTitle;
     }
     
   };

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.click();
    input.onchange = async () => {
      const file = input.files[0];
      console.log('file', file);
      const formData = new FormData();
      formData.append('image', file);

      const res = await fetch('https://api.imgbb.com/1/upload?key=f7bb453322a00301accf8e38c2cd0ac0', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();
      console.log('result', result);

      if (result.data) {
        const imageUrl = result.data.display_url;

        const range = quillRef.current?.getEditor().getSelection();

        quillRef.current
          ?.getEditor()
          .clipboard.dangerouslyPasteHTML(range.index || 0, `<img src="${imageUrl}" alt="Uploaded Image"/>`);
      } else {
        console.error('Tải ảnh lên thất bại. Dữ liệu không xác định.');
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ color: [] }, { background: [] }],
          [{ size: ['small', false, 'large', 'huge'] }],
          ['link'],
          ['image'],
          ['clean'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

  return (
    <div>
      {isEditing && (
        <BaseButton content={'Delete'} className={'bg-red-400 m-3'} onClick={handleDelete} />
      )}
      <input
        type='text'
        placeholder='Enter title'
        value={isEditing ? selectedNews.title : title}
        onChange={(e) => handleTitleChange(e)}
        className='w-1/2 p-1 my-5'
        disabled={saveContent && !isCreate}
      />
      <ReactQuill
        value={isEditing ? selectedNews.content : editorValue}
        onChange={handleChange}
        formats={formats}
        readOnly={saveContent && !isCreate}
        modules={modules}
        ref={quillRef}
      />
      {/* <p dangerouslySetInnerHTML={{ __html: editorValue }}></p> */}
      <div className='w-full flex justify-center mt-4'>
        {isCreate && (
          <button className='bg-blue-500 text-white px-4 py-1 rounded-sm' onClick={handleSave}>
            Create
          </button>
        )}
        {saveContent && !isCreate && (
          <button className='bg-red-500 text-white px-4 py-1 rounded-sm' onClick={handleEdit}>
            Edit
          </button>
        )}
        {!saveContent && !isCreate && (
          <button className='bg-blue-500 text-white px-4 py-1 rounded-sm' onClick={handleDone}>
            Done
          </button>
        )}
      </div>
    </div>
  );
};

export default NewDetail;
