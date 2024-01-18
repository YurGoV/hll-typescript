enum EDeviceType {
  Light = 'light',
  AirConditioner = 'air-conditioner',
  SecuritySystem = 'security-system',
}

class Light {
  // НЕ ЗМІНЮЙТЕ ЦЕЙ  КЛАС

  type = EDeviceType.Light;

  #isTurnedOn = false;

  get isTurnedOn(): boolean {
    return this.#isTurnedOn;
  }

  turnOn(): void {
    this.#isTurnedOn = true;
    console.log('Light is ON');
  }

  turnOff(): void {
    this.#isTurnedOn = false;
    console.log('Light is OFF');
  }
}

class AirConditioner {
  // НЕ ЗМІНЮЙТЕ ЦЕЙ  КЛАС
  type = EDeviceType.AirConditioner;

  #isWorking = false;

  get isWorking(): boolean {
    return this.#isWorking;
  }

  start(): void {
    this.#isWorking = true;
    console.log('Air Conditioner is ON');
  }

  stop(): void {
    this.#isWorking = false;
    console.log('Air Conditioner is OFF');
  }
}

class SecuritySystem {
  // НЕ ЗМІНЮЙТЕ ЦЕЙ  КЛАС

  type = EDeviceType.SecuritySystem;

  #isWatching = false;

  get isWatching(): boolean {
    return this.#isWatching;
  }

  enable(): void {
    this.#isWatching = true;
    console.log('Security system is ON');
  }

  disable(): void {
    this.#isWatching = false;
    console.log('Security system is OFF');
  }
}

// NOTE: new
interface Device {
  toggle(): void;
}

class LightAdapter implements Device {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  toggle(): void {
    if (this.light.isTurnedOn) {
      this.light.turnOff();
    } else {
      this.light.turnOn();
    }
  }
}

class AirConditionerAdapter implements Device {
  private airConditioner: AirConditioner;

  constructor(airConditioner: AirConditioner) {
    this.airConditioner = airConditioner;
  }

  toggle(): void {
    if (this.airConditioner.isWorking) {
      this.airConditioner.stop();
    } else {
      this.airConditioner.start();
    }
  }
}

class SecuritySystemAdapter implements Device {
  private securitySystem: SecuritySystem;

  constructor(securitySystem: SecuritySystem) {
    this.securitySystem = securitySystem;
  }

  toggle(): void {
    if (this.securitySystem.isWatching) {
      this.securitySystem.disable();
    } else {
      this.securitySystem.enable();
    }
  }
}

class DeviceFacade {
  private lightAdapter: LightAdapter;

  private airConditionerAdapter: AirConditionerAdapter;

  private securitySystemAdapter: SecuritySystemAdapter;

  constructor(light: Light, airConditioner: AirConditioner, securitySystem: SecuritySystem) {
    this.lightAdapter = new LightAdapter(light);
    this.airConditionerAdapter = new AirConditionerAdapter(airConditioner);
    this.securitySystemAdapter = new SecuritySystemAdapter(securitySystem);
  }

  toggleLight(): void {
    this.lightAdapter.toggle();
  }

  toggleAirConditioner(): void {
    this.airConditionerAdapter.toggle();
  }

  toggleSecuritySystem(): void {
    this.securitySystemAdapter.toggle();
  }
}

class HomeControlPanel {
  private deviceFacade: DeviceFacade;

  constructor(light: Light, airConditioner: AirConditioner, securitySystem: SecuritySystem) {
    this.deviceFacade = new DeviceFacade(light, airConditioner, securitySystem);
  }

  leaveHome(): void {
    this.deviceFacade.toggleAirConditioner();
    this.deviceFacade.toggleLight();
    this.deviceFacade.toggleSecuritySystem();
  }

  backHome(): void {
    this.deviceFacade.toggleAirConditioner();
    this.deviceFacade.toggleLight();
    this.deviceFacade.toggleSecuritySystem();
  }
}

class RemoteControl {
  private deviceFacade: DeviceFacade;

  constructor(light: Light, airConditioner: AirConditioner, securitySystem: SecuritySystem) {
    this.deviceFacade = new DeviceFacade(light, airConditioner, securitySystem);
  }

  toggleLight(): void {
    this.deviceFacade.toggleLight();
  }

  toggleAirConditioner(): void {
    this.deviceFacade.toggleAirConditioner();
  }
}

const light = new Light();
const airConditioner = new AirConditioner();
const securitySystem = new SecuritySystem();

const deviceFacade = new DeviceFacade(light, airConditioner, securitySystem);

const homeControlPanel = new HomeControlPanel(light, airConditioner, securitySystem);
const remoteControl = new RemoteControl(light, airConditioner, securitySystem);

homeControlPanel.leaveHome(); 
homeControlPanel.backHome(); 

remoteControl.toggleLight(); 
remoteControl.toggleAirConditioner(); 

deviceFacade.toggleSecuritySystem(); 

// output:
// jAir Conditioner is ON
// Light is ON
// Security system is ON
// Air Conditioner is OFF
// Light is OFF
// Security system is OFF
// Light is ON
// Air Conditioner is ON
// Security system is ON
