(()=>{"use strict";const e=require("electron");e.contextBridge.exposeInMainWorld("ipcRenderer",{send:(n,r)=>{e.ipcRenderer.send(n,r)},sendSync:(n,r)=>e.ipcRenderer.sendSync(n,r),sendTo:(n,r,...d)=>e.ipcRenderer.sendTo(n,r,...d),invoke:(n,r)=>e.ipcRenderer.invoke(n,r),on:(n,r)=>{e.ipcRenderer.on(n,((e,...n)=>r(e,...n)))},removeAllListeners:n=>{e.ipcRenderer.removeAllListeners(n)}})})();