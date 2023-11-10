const jsAsCSS = (name: string, value: string) => {
    document.documentElement.style.setProperty(name, value);
}

export default jsAsCSS;