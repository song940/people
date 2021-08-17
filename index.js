import { ready } from 'https://lsong.org/scripts/dom.js';
import {
  h, render, useState,
  useRouter, push, back,
  Link, Button,
} from 'https://lsong.org/scripts/components/index.js';

const Preview = () => {
  return h('div', { className: 'cv-preview' }, [])
};

const EditorBasic = () => {
  return h('div', { className: 'cv-editor-group' }, [
    h('div', { className: 'form-field' }, [
      h('label', null, "Name"),
      h('input', null)
    ]),
    h('div', { className: 'form-field' }, [
      h('label', null, "Mobile"),
      h('input', null)
    ]),
    h('div', { className: 'form-field' }, [
      h('label', null, "Email"),
      h('input', null)
    ]),
    h('div', { className: 'form-field' }, [
      h('label', null, "Gender"),
      h('input', null)
    ]),
  ])
};

const EditorEducation = () => {
  return h('div', { className: 'cv-editor-group' }, [
    h('div', { className: 'form-field' }, [
      h('label', null, "Company name"),
      h('input', null)
    ]),
    h('div', { className: 'form-field' }, [
      h('label', null, "Title"),
      h('input', null)
    ]),
    h('div', { className: 'form-field' }, [
      h('label', null, "A"),
      h('input', null)
    ]),
    h('div', { className: 'form-field' }, [
      h('label', null, "B"),
      h('input', null)
    ]),
  ])
};

const EditorProject = () => {
  return h('div', { className: 'cv-editor-group' }, [
    h('div', { className: 'form-field' }, [
      h('label', null, "Project name"),
      h('input', null)
    ]),
    h('div', { className: 'form-field' }, [
      h('label', null, "Title"),
      h('input', null)
    ]),
    h('div', { className: 'form-field' }, [
      h('label', null, "A"),
      h('input', null)
    ]),
    h('div', { className: 'form-field' }, [
      h('label', null, "B"),
      h('input', null)
    ]),
  ])
};

const EditorHeader = ({ title, children }) => {
  return h('div', { className: 'cv-editor-header' }, [
    h('h3', null, title),
    children
  ]);
};

const Editor = () => {
  const [projects, setProjects] = useState([]);
  const [educations, setEducations] = useState([{}]);
  const [experiences, setExperiences] = useState([]);
  const addEducation = () => {
    educations.push({})
    setEducations([...educations]);
  };
  const addProject = () => {
    projects.push({});
    setProjects([...projects]);
  };
  const addExperience = () => {
    experiences.push({});
    setExperiences([...experiences]);
  };
  return h('form', { className: 'cv-editor form' }, [
    h(EditorHeader, { title: 'Basic' }),
    h(EditorBasic),
    h(EditorHeader, { title: 'Education' }, [
      h(Link, { onClick: addEducation }, '+ Add')
    ]),
    educations.map(education => h(EditorEducation, { education })),
    h(EditorHeader, { title: 'Work Experience' }, [
      h(Link, { onClick: addExperience }, '+ Add')
    ]),
    experiences.map(experience => h(EditorEducation, { experience })),
    h(EditorHeader, { title: 'Projects' }, [
      h(Link, { onClick: addProject }, '+ Add')
    ]),
    projects.map(project => h(EditorProject, { project })),
  ]);
};

const New = () => {
  return [
    h('div', { className: 'cv-header' }, [
      h('h2', null, "New File"),
      h(Link, { onClick: back }, "Back")
    ]),
    h('div', { className: 'cv-main' }, [
      h(Preview),
      h(Editor),
    ]),
    h('footer', {}, [
      h(Button),
      h('div', null, [
        h(Button, { onClick: back }, "Back"),
        h(Button, { type: 'primary' }, "Submit"),
      ])
    ])
  ]
}

const Index = () => {
  return h('div', null, [
    h('h2', {}, "Index"),
    h(Link, { onClick: () => push('/new') }, "New")
  ]);
};

const routes = {
  '/': () => h(Index),
  '/new': () => h(New),
}


const App = () => {
  const view = useRouter(routes);
  return view;
};

ready(() => {
  const app = document.getElementById('app');
  render(h(App), app);
});