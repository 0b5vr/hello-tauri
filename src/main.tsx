import { render } from 'preact';
import { App } from './app';
import './index.css';
import { fs, path } from '@tauri-apps/api';

( async () => {
  const appDir = await path.appDir();
  const configPath = await path.resolve( appDir, 'config.json' );

  // ensure the appDir exists
  await fs.createDir( appDir, { recursive: true } );

  // read config file
  const configStr = await fs.readTextFile( configPath ).catch( ( error: string ) => {
    // TODO: eh
    if ( error.includes( 'os error 2' ) ) {
      return '{}';
    } else {
      throw error;
    }
  } );
  const config = JSON.parse( configStr );

  // a random config shit
  config.bootCount = ( config.bootCount ?? 0 ) + 1;

  // write config file
  await fs.writeFile( { path: configPath, contents: JSON.stringify( config ) } );

  render(
    <App bootCount={ config.bootCount } />,
    document.getElementById( 'app' )!,
  );
} )();
