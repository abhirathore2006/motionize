import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
      let results:any = [];
        for(let i =0 ;i<2;i++){
          results.push(<div key={i}>{i}</div>)
        }
        return results;
    }
}
