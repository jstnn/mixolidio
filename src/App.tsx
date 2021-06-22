import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import icon from '../assets/icon.svg';
// import './App.global.css';
import ProjectList from "./components/ProjectList";

const Hello = () => {
  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    const holder = document.getElementById('drag-file');

    if (!holder) return;
 
    holder.ondragover = () => {
        return false;
    };

    holder.ondragleave = () => {
        return false;
    };

    holder.ondragend = () => {
        return false;
    };

    holder.ondrop = (e: DragEvent) => {
      e.preventDefault();
      const files = e?.dataTransfer?.files ?? {} as FileList
      const poolFiles: File[] = [];
      Array.from(files).forEach(file => poolFiles.push(file))
      if (poolFiles.length>0) setFiles(poolFiles);
      return false;
    };
  }, [])

  return (
    <div>
      {/* <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div> */}
      <h1>Projects</h1>
      <div id="drag-file">
        <p>Drag your files here</p>
        {files.map(file => (
          file.path
        ))}
      </div>
      <ProjectList />
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
