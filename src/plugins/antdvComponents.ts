import { App } from 'vue';
import { 
  ConfigProvider,
  Layout,
  Menu,
  Radio,
  Table,
  Tag,
  DatePicker,
  Select,
  Button,
} from 'ant-design-vue';

export function useAntdvComponents (app: App<Element>) {
  app
    .use(ConfigProvider)
    .use(Layout)
    .use(Menu)
    .use(Radio)
    .use(Table)
    .use(Tag)
    .use(DatePicker)
    .use(Select)
    .use(Button);
}