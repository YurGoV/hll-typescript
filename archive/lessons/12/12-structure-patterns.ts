// FACADE

class Logger {
  log(message: string) {
    console.log(message);
  }
}

class Notifier {
  send(template: string, to: string) {
    console.log(`Sending ${template} to ${to}`);
  }
}

class TemplateManager {
  #templates: { name: string; template: string }[] = [
    { name: 'InfoUpdated', template: '<h1>Information updated</h1>' },
  ];

  getByName(name: string): string | undefined {
    return this.#templates.find((template) => template.name === name)?.template;
  }
}

class NotificationFacade {
  #logger: Logger;

  #notifier: Notifier;

  #templateManager: TemplateManager;

  constructor() {
    this.#logger = new Logger();
    this.#notifier = new Notifier();
    this.#templateManager = new TemplateManager();
  }

  send(to: string, templateName: string) {
    const template = this.#templateManager.getByName(templateName);

    if (!template) {
      this.#logger.log('Template not found');

      return;
    }

    this.#notifier.send(template, to);
    this.#logger.log('Template sent');
  }
}

class User {
  #email: string;
  
  #notificationFacade: NotificationFacade;

  constructor(email: string) {
    this.#email = email;
    this.#notificationFacade = new NotificationFacade();
  }

  updateInfo() {
    // Business logic.... Api call etc....

    this.#notificationFacade.send(this.#email, 'InfoUpdated');
  }
}

class Order {
  #customerEmail: string;
  
  #notificationFacade: NotificationFacade;

  constructor(email: string) {
    this.#customerEmail = email;
    this.#notificationFacade = new NotificationFacade();
  }

  cancel() {
    // Business logic.... Api call etc....

    this.#notificationFacade.send(this.#customerEmail, 'CancelOrder');
  }
}

// Adapter

class OldGeolocationLibrary {
  getCoordinates(): string {
    return '41.40338, 2.17403';
  }
}

interface Coordinates {
  latitude: number;
  longtitude: number;
}

class GeolocationAdapter implements Coordinates {
  #oldLibrary: OldGeolocationLibrary;

  constructor(oldLibrary: OldGeolocationLibrary) {
    this.#oldLibrary = oldLibrary;
  }

  get latitude(): number {
    return Number(this.#oldLibrary.getCoordinates().split(',')[0]);
  }

  get longtitude(): number {
    return Number(this.#oldLibrary.getCoordinates().split(',')[1]);
  }
}

// Old part of application;
const geolocation = new OldGeolocationLibrary();
geolocation.getCoordinates();

// New part of application;
const newGeolocation = new GeolocationAdapter(geolocation);

sendCoordinates(newGeolocation);

function sendCoordinates(coordinates: Coordinates): void {
  console.log('send to BE');
}

// Bridge

// Telegram{}

// TelegramDelayed extends Telegram
// TelegramPeriodically extends Telegram

// Viber

// ViberDelayed extends Viber
// ViberPeriodically extends Viber

// Sms
// SmsDelayed extends Sms
// SmsPeriodically extends Sms

interface IProvider {
  sendMessage(message: string): void;
  connect(config: unknown): void;
  disconnect(): void;
}

class TelegramProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }

  connect(config: unknown): void {
    console.log('Telegram Config', config);
  }

  disconnect(): void {
    console.log('TG disconnected');
  }
}

class ViberProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }

  connect(config: unknown): void {
    console.log('Viber Config', config);
  }

  disconnect(): void {
    console.log('Viber disconnected');
  }
}

class NotificationSender {
  readonly #provider: IProvider;

  constructor(provider: IProvider) {
    this.#provider = provider;
  }

  send(message: string, config: unknown): void {
    this.#provider.connect(config);
    this.#provider.sendMessage(message);
    this.#provider.disconnect();
  }
}

class DelayedNotificationSender extends NotificationSender {
  constructor(provider: IProvider) {
    super(provider);
  }

  override send(message: string, config: unknown): void {
    setTimeout(() => {
      super.send(message, config);
    }, 1000);
  }
}

class PeriodicallyNotificationSender extends NotificationSender {
  override send(message: string, config: unknown): void {
    setInterval(() => {
      super.send(message, config);
    }, 1000);
  }
}

const commonTelegramNotificationSender = new NotificationSender(
  new TelegramProvider(),
);
const delayedTelegramNotificationSender = new DelayedNotificationSender(
  new TelegramProvider(),
);

const commonViberNotificationSender = new NotificationSender(
  new ViberProvider(),
);

const delayedViberNotificationSender = new DelayedNotificationSender(
  new ViberProvider(),
);

const periodicallyViberNotificationSender = new PeriodicallyNotificationSender(
  new ViberProvider(),
);
