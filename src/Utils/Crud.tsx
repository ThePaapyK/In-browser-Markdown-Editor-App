import { useState, useEffect, useRef } from 'react';
import { marked } from 'marked';
import formatDate from './utils'

const CrudFunctions = () => {
  type Documente = {
  createdAt: string;
  name: string;
  content: string;
  };

  const [documents, setDocuments] = useState<Documente[]>([]);
  const [selectedDocIndex, setSelectedDocIndex] = useState<number | null>(1);
  const markdownTextareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const initializeData = async () => {
      const localData = localStorage.getItem('documents');
      if (!localData) {
        const response = await fetch('/data.json');
        const initialData: Documente[] = await response.json();
        localStorage.setItem('documents', JSON.stringify(initialData));
        setDocuments(initialData);
      } else {
        setDocuments(JSON.parse(localData));
      }

      const savedSelectedDocIndex = localStorage.getItem('selectedDocIndex');
      if (savedSelectedDocIndex !== null) {
        setSelectedDocIndex(parseInt(savedSelectedDocIndex, 10));
      }
    };
    initializeData();
  }, []);


  useEffect(() => {
    if (selectedDocIndex !== null && selectedDocIndex !== undefined) {
      localStorage.setItem('selectedDocIndex', selectedDocIndex.toString());
    } else {
      localStorage.removeItem('selectedDocIndex');
    }
  }, [selectedDocIndex]);


  const addDocument = () => {
    const newDocument = {
      createdAt: formatDate(new Date()),
      name: 'untitled-document.md',
      content: ''
    };
    const updatedDocuments = [...documents, newDocument];
    setDocuments(updatedDocuments);
    setSelectedDocIndex(updatedDocuments.length - 1);
    localStorage.setItem('documents', JSON.stringify(updatedDocuments));
  };

  const updateDocument = (updatedContent: string) => {
    if (selectedDocIndex === null) return;
    const updatedDocuments = documents.map((doc, i) => i === selectedDocIndex ? { ...doc, content: updatedContent } : doc);

    setDocuments(updatedDocuments);
  };

  const updateDocName = (index: number, updatedName: string) => {
    if (index === null) return;

    const updatedDocs = documents.map((doc, i) => i === index ? { ...doc, name: updatedName } : doc);

    setDocuments(updatedDocs);
  };

  const saveDocument = (index: number | null, content: string, name: string) => {
    if (name === "") {
      name = "untitled-document.md";
    }
    if (!name.endsWith('.md')) {
      name += '.md';
    }
    
    const baseName = name.replace(/(\d+)?.md$/, '');
    let uniqueName = name;
    let counter = 1;

   // eslint-disable-next-line
    while (documents.some((doc, i) => i !== index && doc.name === uniqueName)) {
      uniqueName = `${baseName}${counter}.md`;
      counter++;
    }

    const updatedDocs = documents.map((doc, i) =>
      i === index ? { ...doc, name: uniqueName, content: content } : doc
    );
    setDocuments(updatedDocs);
    localStorage.setItem('documents', JSON.stringify(updatedDocs));
  };

  const deleteDocument = (index: number) => {
    const updatedDocuments = documents.filter((_, i) => i !== index);
    setDocuments(updatedDocuments);
    if (updatedDocuments.length === 0) {
      setSelectedDocIndex(null);
    }
    else if (index >= updatedDocuments.length) {
      setSelectedDocIndex(updatedDocuments.length - 1);
    } else {
      setSelectedDocIndex(index);
    }
      console.log(index);
      localStorage.setItem('documents', JSON.stringify(updatedDocuments));
  };

  function  renderMarkdown(content: string): string | Promise<string> {
    return marked(content);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      markdownTextareaRef.current?.focus(); // Focus the textarea
    }
  };

  return {
    documents,
    setDocuments,
    selectedDocIndex,
    setSelectedDocIndex,
    addDocument,
    updateDocument,
    updateDocName,
    saveDocument,
    deleteDocument,
    renderMarkdown,
    handleKeyDown,
    markdownTextareaRef
  };
};

export default CrudFunctions;

