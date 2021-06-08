export default class{
  constructor(deps){
      const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {})
  
      this.proto = deps.proto
      this.client = new deps.proto.CitiesClient('http://localhost:8099', null, null)

      enableDevTools([
        this.client,
      ]);
  }

  index (){
      const req = new this.proto.EmptyMessage()
      return this.client.list(req, {}).then(res=>{
          return res.getCityList().map(city=>{
              return {
                  id: city.getId(),
                  name: city.getName(),
              }
          });
      })
  }
}